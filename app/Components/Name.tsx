"use client";
import { useEffect, useState } from 'react';
import styles from './Name.module.css';

const Name = () => {
    const [mounted, setMounted] = useState(false);

    let name = "Hi, I'm Chris";

    function randomHeight() {
        return Math.floor(Math.random() * 500) + 50;
    }

    function createBall(){
        let ballElement = document.createElement('div');
        ballElement.className = styles.ball;

        let randSize = Math.floor(Math.random() * 5) + 5
        ballElement.style.height = randSize + "px";
        ballElement.style.width = randSize + "px";
        ballElement.style.left = (Math.floor(Math.random() * 90) + 5) + "%";

        if(Math.random() > 0.5){
            ballElement.style.backgroundColor = "var(--primary-color)";
        } else{
            ballElement.style.backgroundColor = "var(--secondary-color)";
        }
        
        
        document.getElementsByClassName('nameContainer')[0].appendChild(ballElement);
        setTimeout(() => {
            document.getElementsByClassName('nameContainer')[0].removeChild(ballElement);
        }, 3500)
        
    }

    function updateOpacity(){
        let scroll = document.documentElement.scrollTop;
        let opacity = 1 - scroll / 200;
        if(opacity > 0){
            document.getElementById("arrow")?.style.setProperty("opacity", `${opacity}`);
        } else {
            document.getElementById("arrow")?.style.setProperty("display", "none");
            document.removeEventListener("scroll", updateOpacity);
        }
    }

    useEffect(() => {
        setMounted(true)
        setTimeout(() => {
            setInterval(createBall, 100);
        }, 1000)

        document.addEventListener("scroll", updateOpacity)
    }, []);

    return (
        <div className={styles.container + " " + "nameContainer"}>
            <div className={styles.upperContainer}>
                <div className={styles.lowerContainer}>
                    {!mounted ? null :name.split(" ").map((word, index) => (
                        <div key={index} className={styles.lettersContainer}>{Array.from(word).map((char, charIndex) => (
                            <div key={charIndex} className={styles.barLetterContainer}>
                                {Math.random() > 0.5 ?
                                    (<>
                                        <span className={styles.nameChar}>{char}</span>
                                        <div className={styles.bar} style={{height: randomHeight() + "px"}}></div>
                                    </>)
                                    :
                                    (<>
                                        <div className={styles.bar} style={{height: randomHeight() + "px"}}></div>
                                        <span className={styles.nameChar}>{char}</span></> )
                                }   
                            </div>
                        ))}</div>
                    ))}    
                </div>
                
            </div>
            <div id="arrow" className={styles.bottomArrow}>➤</div>
            <div className={styles.bottomFadeOut}></div>
        </div>
    );
};

export default Name;