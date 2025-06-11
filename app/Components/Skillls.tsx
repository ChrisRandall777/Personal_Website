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
                            <img className={styles.icon} src="skill_icons/node-js.png"/>
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

//HTML, JS, TS, CSS, React, Node JS, Next JS
//Java, Python, C, C++

/**
 * <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/node-js" title="node js icons">Node js icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">Ui icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by Freepik - Flaticon</a>
 * 
 * <a href="https://www.flaticon.com/free-icons/bomb" title="bomb icons">Bomb icons created by vectorsmarket15 - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/ui-design" title="ui-design icons">Ui-design icons created by ekays.dsgn - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/basketball" title="basketball icons">Basketball icons created by GOWI - Flaticon</a>
 * 
 * <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/interaction" title="interaction icons">Interaction icons created by Enamo Studios - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/phone-number" title="phone number icons">Phone number icons created by lakonicon - Flaticon</a>
 */

