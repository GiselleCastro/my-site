'use client'
import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

enum ThemeEnum {
  Light = 'light',
  Dark = 'dark',
}

export const ToggleSwitchMode = (): React.ReactNode => {
  const { theme, toogleTheme } = useThemeContext();

  return (
    <button onClick={toogleTheme}>
      {theme === ThemeEnum.Dark && <CiSun size={'24px'} />}
      {theme === ThemeEnum.Light && <IoMoonOutline size={'24px'} />}
    </button>
  );
}
