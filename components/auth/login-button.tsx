'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {

    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
        console.log('LOGIN BUTTON IS CLICKED ')
    }




    if (mode === "modal") {
        return (
            <span>
                TODO : Implement Modal
            </span>
        )
    }


    return (
        <span onClick={onClick} className="coursor-pointer">
            {children}
        </span>
    )

}