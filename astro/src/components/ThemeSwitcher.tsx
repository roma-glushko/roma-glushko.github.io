import * as React from "react"
import { useState, useEffect } from "react"

import "./ThemeSwitcher.css"

export enum Themes {
  DARK = `dark`,
  LIGHT = `light`,
}

interface ThemeProps {
  theme: string
  toggleTheme: (themeName: string) => void
}

const ThemeSwitcher = (): JSX.Element => {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? Themes.LIGHT)

  const switchTheme = () => {
    console.log("theme: ", theme)
    setTheme(theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT);
  };

  useEffect(() => {
    setMounted(true)

    if (theme === Themes.DARK) {
      document.body.classList.add(Themes.DARK);
    } else {
      document.body.classList.remove(Themes.DARK);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!mounted) {
    return <></>
  }

  return (
    <div className={"theme-switcher-toggler" + (theme === Themes.DARK ? " theme-switcher-toggler--checked" : "")} onClick={switchTheme}>
      <div className="theme-switcher-track" />
      <div className="theme-switcher-thumb" />

      <input
        className="theme-switcher-input"
        type="checkbox"
        checked={theme === Themes.DARK}
        readOnly={true}
        aria-label="Switch between dark and light themes"
      />
    </div>
  )
}

export default ThemeSwitcher
