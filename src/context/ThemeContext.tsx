"use client"

import { createContext, useEffect, useState } from "react"

interface ThemeContextType {
    theme: string;
    changeTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType> ({
    theme: "cupcake",
    changeTheme: () => {}
});

export const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState("cupcake");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem("theme") || "cupcake";
        setTheme(storedTheme);
    }, [])

    if (!isMounted) {
        return <div className="flex h-screen w-full justify-center text-center items-center font-luckiest">SAFAT</div>
    }

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}