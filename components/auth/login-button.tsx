"use client";
import {useRouter} from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";




interface LoginButtonProps{

    children:React.ReactNode;
    mode?:"modal" | "redirect";
    asChild?: boolean;
    }

    export const LoginButton =({
        children,
        mode ="redirect",
        asChild
    }: LoginButtonProps) => {

    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
       

        };

        if (mode==="modal") {
            return(
                <span>
                    TODO: Implement modal login
                    <>
                    </>
                </span>
            )
        }



        return (
            <span onClick={onClick} className="cursor-pointer">
                {children}
            </span>
        );
        
    };