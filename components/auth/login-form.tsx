import { CardWrapper } from "./card-wrapper";

export default function LoginForm() {
    console.log(" i am working ");
    return (
        <CardWrapper
            headerLabel="Welcome back "
            backButtonLabel="Don't have and account ? "
            backButtonHref="/auth/register"
            showSocial
        >

            hi ther eLogin Form
        </CardWrapper>
    )
} 