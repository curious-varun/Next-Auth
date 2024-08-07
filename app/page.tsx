import React from 'react';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]

})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-t from-sky-500 to-blue-800">

      <div className='space-y-6'>
        <h1 className={cn(" text-6xl font-semibold text-white drop-shadow-md", font.className)}> 🔐Auth </h1>
        <p className='text-center text-white text-lg'> A simple authentication Service  </p>
      </div>

      <LoginButton>
        <Button variant="secondary" className=''>
          Sign in
        </Button>
      </LoginButton>

    </main>
  );
}
