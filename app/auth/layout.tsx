const AuthLayout = (
    { children }: { children: React.ReactNode }
) => {


    return (
        <div className="flex h-full flex-col items-center justify-center bg-gradient-to-t from-sky-500 to-blue-800">

            {children}

        </div>
    )


};


export default AuthLayout;