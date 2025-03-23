"use client"

import { ReactNode, useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export interface ClientThemeWrapperProps {
    children: ReactNode;
}

export default function ClientThemeWrapper({ children }: ClientThemeWrapperProps) {
    const { theme } = useContext(ThemeContext);

    return <div data-theme={theme}>{children}</div>
}