"use client";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import React from 'react'
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { login } from "@/actions/login";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Button } from "../ui/button";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";





export const LoginForm = () => {
  const router = useRouter();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  // Remove LoginResult type since login returns void

  const handleSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setSuccess("");
    setError("");
    try {
      await login(values);
      setSuccess("Login successful!");
      setTimeout(() => {
router.push(`/main?user=${encodeURIComponent(values.email)}`);
      }, 2000);
    } catch (err: any) {
      setError(err?.message || "Login failed.");
      router.push("/auth/login");
    }
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="space-y-4">

            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input {...field}
                  placeholder="kamrulhp@gmail.com"
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <input {...field}
                  type="password"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          </div>

          <FormError error={error ?? null} />
          <FormSuccess message={success ?? null} />

          <Button
            type="submit"
            className="w-full"
          >
            Sign in
          </Button>
        </form>
      </Form>

    </CardWrapper>
  )
}
