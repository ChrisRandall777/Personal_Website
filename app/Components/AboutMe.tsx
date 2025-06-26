import "../globals.css"
import styles from "./AboutMe.module.css"

export default function AboutMe(){
    return (
        <>  
            <div className={styles.AboutMeSection}>
                <div className="spaceDiv"></div>
                <h1 className="sectionHeader">About Me</h1>
                <div className={styles.container}>
                    <div>
                        <h1 style={{marginTop: "0px"}}>Hi, I'm Chris!<br/>I'm a Software Developer with a Computer Science degree from the University of Illinois who's passionate about <span className={styles.colorText}>Programming</span> and <span className={styles.colorText}>Web Development</span></h1>
                        <h1>Check out my Skills, Portfolio, and Contact Info below!</h1>
                    </div>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src="profile_image.png"/>
                    </div>    
                </div>
                
            </div>
        </>
    )
}
