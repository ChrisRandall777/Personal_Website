"use client"
import styles from "./Card.module.css"

export default function Card({ info, openModal }: any){
    return (
        <>
            <div className={styles.card}>
                <img className={styles.cardImage} src={info.img}/>
                <div>
                    <h1>{info.title}</h1>
                    {info.site ? <a href={info.site} target="_blank">Live Site</a> : null}
                    <p className={styles.learnMore} onClick={() => {openModal(info)}}>Learn More</p> 
                </div>
            </div>
        </>
    )
}
