import styles from './SkillsContainer.module.css';

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
    return (
        <div className={styles.wrapper}>
            <div className={styles.skillsContainer}>
                <h2 className={styles.skillTitle}>{props.title}</h2>
                <div className={styles.line}></div>
                {props.contentInfo.map((info, index) => {
                    return  (
                        <div key={index} className={styles.contentContainer}>
                            <h3 className={styles.skillTitle}>{info.title}<span className={styles.colon}>:</span></h3>
                            {info.isContentIMGs ? 
                                <div className={styles.elementsContainer}>
                                    {info.content.map((src, index2) => {return <img key={index2} src={src} className={styles.img}></img>})}
                                </div>
                                :
                                <div className={styles.elementsContainer}>
                                    {info.content.map((str, index3) => {return <p key={index3} className={styles.textElement}>{str}{(index3 === info.content.length - 1 ? null : <span className={styles.star}>{" ★ "}</span>)}</p>})}
                                </div>
                            }
                        </div>
                    )
                })}
            </div>    
        </div>
    )
}

export default SkillsContainer;