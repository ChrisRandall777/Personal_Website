import "../globals.css"
import styles from "./Skills.module.css"
import Link from "next/link"

export default function Skills(){
    return (
        <>
            <div className={styles.skillsSection}>
                <div className="spaceDiv"></div>
                <h1 className="sectionHeader">Skills</h1>
                <div className={styles.contentContainer}>
                    <div className={styles.half1}>
                        <h1 style={{textAlign: "center"}}>Programming Languages</h1>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src="skill_icons/html-5.png"/>
                            <img className={styles.icon} src="skill_icons/js.png"/>
                            <img className={styles.icon} src="skill_icons/typescript.png"/>
                            <img className={styles.icon} src="skill_icons/css-3.png"/>
                            <img className={styles.icon} src="skill_icons/java.png"/>
                            <img className={styles.icon} src="skill_icons/python.png"/>
                            <img className={styles.icon} src="skill_icons/c.png"/>
                            <img className={styles.icon} src="skill_icons/c-.png"/>
                        </div>  
                    </div>
                      
                    <div className={styles.infoContainer}>
                        <h1>Frameworks and Libraries</h1>
                        <ul className={styles.list}>
                            <li>React</li>
                            <li>JQuery</li>
                            <li>Next.js</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>D3.js</li>
                            <li>Pandas</li>
                            <li>Numpy</li>
                        </ul>

                        <div className={styles.linkDiv}>
                            <Link className={styles.resumeLink} href="Chris_Resume.pdf" target="_blank"><p style={{margin: "10px 0"}}>Check out My Resume</p></Link>    
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}
