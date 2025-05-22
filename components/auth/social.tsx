"use client";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";


export const Social = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-y-4">
            
           
            <div className="flex flex-col items-center justify-center w-full gap-y-4">
                <Button
                size={"lg"}
                variant="outline"
                className="w-full"
                onClick={() => {
                    // Handle Google sign-in logic here
                }}
                >
                    <FcGoogle className="mr-2" />
                    Sign in with Google
                </Button>

                <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                        // Handle Facebook sign-in logic here
                    }}
                >
                    <FaFacebook className="mr-2" />
                    Sign in with Facebook
                </Button>
                
                <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                        // Handle GitHub sign-in logic here
                    }}
                >
                    <FaGithub className="mr-2" />
                    Sign in with GitHub
                </Button>
            </div>

        </div>

    );
}

