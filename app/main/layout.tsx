import React from "react";

const MainLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-blue-300">
            <header className="w-full py-4 px-8 bg-blue-700 text-white shadow">
                <h1 className="text-2xl font-bold">Main Page</h1>
            </header>
            <main className="flex-1 flex flex-col items-center justify-center p-8">
                {children}
            </main>
            <footer className="w-full py-2 px-8 bg-blue-800 text-blue-100 text-center">
                &copy; {new Date().getFullYear()} My App
            </footer>
        </div>
    );
};

export default MainLayout;