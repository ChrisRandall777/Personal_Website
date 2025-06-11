"use client";
import "../globals.css"
import styles from "./NavBar.module.css"
import { useState } from "react"
import Link from "next/link";
import { useEffect } from "react";


export default function NavBar(){
    const [selected, setSelected] = useState<string>("aboutMeHeader")

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            let skillsHeight = document.getElementById("skills")?.getBoundingClientRect().top || 0
            let portfolioHeight = document.getElementById("portfolio")?.getBoundingClientRect().top || 0
            let contactHeight = document.getElementById("contact")?.getBoundingClientRect().top || 0

            if(contactHeight < 60 || document.documentElement.getBoundingClientRect().bottom - window.innerHeight < 20){
                if(selected != "contactHeader"){
                    document.getElementById(selected)?.classList.remove(styles.selected)
                    document.getElementById("contactHeader")?.classList.add(styles.selected)
                    setSelected("contactHeader")    
                }
            } else if(portfolioHeight < 60){
                if(selected != "portfolioHeader"){
                    document.getElementById(selected)?.classList.remove(styles.selected)
                    document.getElementById("portfolioHeader")?.classList.add(styles.selected)
                    setSelected("portfolioHeader")    
                }
            } else if(skillsHeight < 60){
                if(selected != "skillsHeader"){
                    document.getElementById(selected)?.classList.remove(styles.selected)
                    document.getElementById("skillsHeader")?.classList.add(styles.selected)
                    setSelected("skillsHeader")
                }
            } else {
                if(selected != "aboutMeHeader"){
                    document.getElementById(selected)?.classList.remove(styles.selected)
                    document.getElementById("aboutMeHeader")?.classList.add(styles.selected)
                    setSelected("aboutMeHeader")
                }
            }
            
        })
    }, [selected])

    return (
        <>
            <div className={styles.bar}>
                <h1 className={styles.nameHeader}>Chris Randall</h1>
                <div className={styles.break}></div>
                <Link className={styles.link} href="#aboutme"><h1 id="aboutMeHeader" className={`${styles.sectionNames} ${styles.selected}`}>About Me</h1></Link>
                <Link className={styles.link} href="#skills"><h1 id="skillsHeader" className={styles.sectionNames}>Skills</h1></Link>
                <Link className={styles.link} href="#portfolio"><h1 id="portfolioHeader" className={styles.sectionNames}>Portfolio</h1></Link>
                <Link className={styles.link} href="#contact"><h1 id="contactHeader" className={styles.sectionNames}>Contact</h1></Link>
                <Link className={styles.link} href="Chris_Resume.pdf" target="_blank"><h1 className={styles.sectionNames}>Resume</h1></Link>
            </div>
        </>
    )
}

