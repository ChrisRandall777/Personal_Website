import styles from "./Skills.module.css"
import SkillsContainer from "./SkillsContainer";

const frontendContentInfo = [
    {
        title: "Programming Languages",
        content: ["skill_icons/html-5.png", "skill_icons/js.png", "skill_icons/typescript.png", "skill_icons/css-3.png"],
        isContentIMGs: true,
    },
    {
        title: "Frameworks & Libraries",
        content: ["React", "Next.js", "JQuery", "D3.js"],
        isContentIMGs: false,
    }
];

const backendContentInfo = [
    {
        title: "Programming Languages",
        content: ["skill_icons/java.png", "skill_icons/python.png", "skill_icons/c.png", "skill_icons/c-.png"],
        isContentIMGs: true,
    },
    {
        title: "Frameworks & Libraries",
        content: ["Node.js", "Express", "Numpy", "Pandas"],
        isContentIMGs: false,
    }
];

export default function Skills(){
    return (
        <>
            <div className={styles.skillsSection}>
                <h1 className="sectionHeader">Skills</h1>
                <div className={styles.allSkillsContainer}>
                    <SkillsContainer title="Frontend Skills" contentInfo={frontendContentInfo} />
                    <SkillsContainer title="Backend Skills" contentInfo={backendContentInfo} />
                </div>
                
                
            </div>
            {/* 
                <img className={styles.icon} src="skill_icons/html-5.png"/>
                <img className={styles.icon} src="skill_icons/js.png"/>
                <img className={styles.icon} src="skill_icons/typescript.png"/>
                <img className={styles.icon} src="skill_icons/css-3.png"/>
                <img className={styles.icon} src="skill_icons/java.png"/>
                <img className={styles.icon} src="skill_icons/python.png"/>
                <img className={styles.icon} src="skill_icons/c.png"/>
                <img className={styles.icon} src="skill_icons/c-.png"/>
            
                <li>React</li>
                <li>JQuery</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>D3.js</li>
                <li>Pandas</li>
                <li>Numpy</li>
            */}
        </>
    )
}
