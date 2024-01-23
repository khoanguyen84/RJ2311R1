import { createContext, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')
    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}