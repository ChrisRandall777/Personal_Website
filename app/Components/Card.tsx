"use client"
import styles from "./Card.module.css"

export default function Card({ info }: any){
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img className={styles.cardImage} src={info.img}/>
                    <div>
                        <h1 className={styles.title}>{info.title}</h1>
                        <p><strong>Description: </strong>{info.description}</p>
                        <p><strong>Tools Used: </strong>{info.toolsUsed}</p>
                        {info.site ? <a href={info.site} target="_blank">Live Site</a> : null}
                    </div>
                </div>
            </div>
            
        </>
    )
}
