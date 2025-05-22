"use client"
import { Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
     } from "@/components/ui/card";

     import { Header } from "@/components/auth/header";
     import { Social } from "./social";
     import { BackButton } from "./back-button";
     

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocialLogin ?: boolean;


    };


export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocialLogin = false
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                 {children}
            </CardContent>
            {showSocialLogin && (
                <CardFooter>
                   <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    href={backButtonHref}
                    label={backButtonLabel}
                />  
            </CardFooter>

        </Card>
    );
}



