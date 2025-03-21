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
        return <div>Loading...</div>
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