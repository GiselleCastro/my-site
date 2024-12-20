"use client"
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme as dark } from '../styles/themes/darkTheme';
import { lightTheme as light } from '@/styles/themes/lightTheme';
import { GlobalStyle } from '@/styles/global';

const Theme = {
    dark, light
}

export enum ThemeEnum {
    Light = 'light',
    Dark = 'dark',
}

type ThemeContextType = {
    theme: ThemeEnum;
    toogleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: ThemeEnum.Dark,
    toogleTheme: () => { }
});

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Dark);


    useEffect(() => {
        const isValidTheme = (theme: string | null) => {
            if (!theme) return false
            return theme === ThemeEnum.Dark || theme === ThemeEnum.Light
        }

        const localTheme = localStorage.getItem('theme');
        if (isValidTheme(localTheme)) setTheme(localTheme as ThemeEnum)
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme]);

    const toogleTheme = () => setTheme(prevTheme => prevTheme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark)

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            <ThemeProvider theme={Theme[theme]}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}