import { FormMessage } from "@/components/ui/form";
import * as z from "zod";



export const LoginSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
  password: z.string().min(8, { message: "Minimum 8 characters required" })
});




export const RegisterSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
  password: z.string().min(8, { message: "Minimum 8 characters required" }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export async function login(values: { email: string; password: string; }) {
  // ...your code...
}

