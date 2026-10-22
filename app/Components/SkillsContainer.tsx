"use client"
import styles from './SkillsContainer.module.css';
import { useState, useEffect } from 'react';

type contentInfo = {
    title: string,
    content: string[],
    isContentIMGs: boolean,
}

type skillsContainerProps = {
    title: string,
    contentInfo: contentInfo[],
}

const SkillsContainer = (props: skillsContainerProps) => {
    const [numInRow, setNumInRow] = useState(5);

    function updateNumInRow(){
        if(window.innerWidth < 450)
            setNumInRow(2)
        else
            setNumInRow(5)
    }

    useEffect(() => {
        window.addEventListener("resize", updateNumInRow)
        updateNumInRow()
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.skillsContainer}>
                <h2 className={styles.skillTitle}>{props.title}</h2>
                <div className={styles.line}></div>
                <div className={styles.contentContainer}>
                    {props.contentInfo.map((info, index) => {
                        return Array.from({ length: 2 }).map((_, idx) => {
                            return idx % 2 == 0 ?
                            (<h3 key={index * props.contentInfo.length + idx} className={styles.skillTitle}>{info.title}<span className={styles.colon}>:</span></h3>)
                            :
                            (info.isContentIMGs ? 
                                <div key={index * props.contentInfo.length + idx} className={styles.elementsContainer}>
                                    {info.content.map((src, index2) => {return <img key={index2} src={src} className={styles.img}></img>})}
                                </div>
                                :
                                <div key={index * props.contentInfo.length + idx} className={styles.elementsContainer}>
                                    <p className={styles.textElement}>
                                        {info.content.map((str, strIdx) => {
                                            return (strIdx == 0 ? <span key={strIdx}>{str}</span> : (strIdx % numInRow == 0 ? <span key={strIdx}><br></br>{str}</span> : <span key={strIdx}>{" ★ " + str}</span>))
                                        })}
                                    </p>            
                                </div>
                            )
                        })
                    })}
                </div>
            </div>    
        </div>
    )
}

export default SkillsContainer;