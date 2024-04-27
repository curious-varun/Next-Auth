"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { hrtime } from "process";


interface BackButtonProps {
    label: string;
    href: string;
}
export const BackButton = ({ href, label, }: BackButtonProps) => {

    return (
        <Button>
            <Link href={href}>{label}</Link>
        </Button>
    )
}