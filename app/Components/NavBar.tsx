"use client";
import styles from "./NavBar.module.css"
import { useState } from "react"
import Link from "next/link";
import { useEffect } from "react";


export default function NavBar(){
    const [selected, setSelected] = useState<string>("none")

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            let aboutMeHeight = document.getElementById("aboutme")?.getBoundingClientRect().top || 0
            let skillsHeight = document.getElementById("skills")?.getBoundingClientRect().top || 0
            let portfolioHeight = document.getElementById("portfolio")?.getBoundingClientRect().top || 0
            let contactHeight = document.getElementById("contact")?.getBoundingClientRect().top || 0
            const NAVBAR_MAX_HEIGHT = 80;

            if(contactHeight < NAVBAR_MAX_HEIGHT + 5 || document.documentElement.getBoundingClientRect().bottom - window.innerHeight < 20){
                if(selected != "contactHeader"){
                    document.getElementById(selected)?.classList.remove(styles.selected)
                    document.getElementById("contactHeader")?.classList.add(styles.selected)
                    setSelected("contactHeader")    
                }
            } else if(portfolioHeight < NAVBAR_MAX_HEIGHT + 5){
                if(selected != "portfolioHeader"){
                    document.getElementById(selected)?.classList.remove(styles.selected)
                    document.getElementById("portfolioHeader")?.classList.add(styles.selected)
                    setSelected("portfolioHeader")    
                }
            } else if(skillsHeight < NAVBAR_MAX_HEIGHT + 5){
                if(selected != "skillsHeader"){
                    document.getElementById(selected)?.classList.remove(styles.selected)
                    document.getElementById("skillsHeader")?.classList.add(styles.selected)
                    setSelected("skillsHeader")
                }
            } else if(aboutMeHeight < NAVBAR_MAX_HEIGHT + 5){
                if(selected != "aboutMeHeader"){
                    document.getElementById(selected)?.classList.remove(styles.selected)
                    document.getElementById("aboutMeHeader")?.classList.add(styles.selected)
                    setSelected("aboutMeHeader")
                }
            } else {
                document.getElementById(selected)?.classList.remove(styles.selected)
                setSelected("none")
            }
            
        })
    }, [selected])

    return (
        <>
            <div className={styles.bar}>
                <h1 className={styles.nameHeader}>Chris Randall</h1>
                <div className={styles.break}></div>
                <Link className={styles.link} href="#aboutme" ><h1 id="aboutMeHeader" className={styles.sectionNames}>About Me</h1></Link>
                <Link className={styles.link} href="#skills"><h1 id="skillsHeader" className={styles.sectionNames}>Skills</h1></Link>
                <Link className={styles.link} href="#portfolio"><h1 id="portfolioHeader" className={styles.sectionNames}>Portfolio</h1></Link>
                <Link className={styles.link} href="#contact"><h1 id="contactHeader" className={styles.sectionNames}>Contact</h1></Link>
                <Link className={styles.link} href="chrisresume.pdf" target="_blank"><h1 className={styles.sectionNames}>Resume🔗</h1></Link>
            </div>
        </>
    )
}

