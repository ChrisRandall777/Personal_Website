"use client";
import styles from "./ThemeToggle.module.css"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const colorPalette = {
        primaryColor: "#ff2727",
        secondaryColor: "#ee6c4d",
        secondaryColorRGB: "238, 108, 77",
        backgroundColor: "#f0f0f0",
        backgroundColorDark: "#1a1a1a",
        backgroundColor2: "#FFD580",
        backgroundColor2Dark: "#121212",
        textColor: "#000000",
        textColorDark: "#ffffff",
    }

    useEffect(() => {
        setMounted(true);
        setTheme("system");
        document.documentElement.style.setProperty('--primary-color', colorPalette.primaryColor);
        document.documentElement.style.setProperty('--secondary-color', colorPalette.secondaryColor);
        document.documentElement.style.setProperty('--secondary-color-rgb', colorPalette.secondaryColorRGB);
    }, []);

    useEffect(() => {
        console.log("themes", theme, systemTheme);
        if(theme === "system"){
            handleThemeChange(systemTheme || "light");
        } else {
            handleThemeChange(theme || "light");
        }
    }, [theme, systemTheme]);

    if (!mounted) {
        return null;
    }

    function handleThemeChange(newTheme: string) {
        if (newTheme === "dark") {
            document.documentElement.style.setProperty('--background-color', colorPalette.backgroundColorDark);
            document.documentElement.style.setProperty('--background-color2', colorPalette.backgroundColor2Dark);
            document.documentElement.style.setProperty('--text-color', colorPalette.textColorDark);
        } else if (newTheme === "light") {
            document.documentElement.style.setProperty('--background-color', colorPalette.backgroundColor);
            document.documentElement.style.setProperty('--background-color2', colorPalette.backgroundColor2);
            document.documentElement.style.setProperty('--text-color', colorPalette.textColor);
        }
    }
    
    return (
        <>
            <div className={styles.themeToggle}>
                <img className={styles.themeImg} src="lightThemeSun.png" alt="Light Theme" onClick={() => {setTheme("light")}}/>
                <img className={styles.themeImg} src="moon.png" alt="Dark Theme" onClick={() => {setTheme("dark")}}/>
                <div id="themeIndicator" className={styles.themeIndicator} style={{ left: (theme === "system" && systemTheme === "dark") || theme === "dark" ? "calc(100% - 45px)" : "5px" }}></div>
            </div>
            <div className={styles.themeToggleMobile}>
                {((theme === "system" && systemTheme === "light") || theme === "light") ? 
                    (<img className={styles.themeImg} src="moon.png" alt="Dark Theme" onClick={() => {setTheme("dark")}}/>)
                    : (<img className={styles.themeImg} src="lightThemeSun.png" alt="Light Theme" onClick={() => {setTheme("light")}}/>)}
            </div>
        </>
    )
}

export default ThemeToggle;