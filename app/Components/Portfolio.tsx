"use client"
import "../globals.css"
import styles from "./Portfolio.module.css"
import Card from "./Card"

let portfolioItems = [
    {
        img: "bomb.png",
        title: "Minesweeper",
        site: "https://chrisrandall777.github.io/Minesweeper/",
        description: "Minesweeper game allowing users to slecect size of board as well as the number of bombs.",
        toolsUsed: "HTML, JS, CSS, CSS Grid, and React."
    },
    {
        img: "sun.png",
        title: "Weather",
        site: "https://chrisrandall777.github.io/Weather/",
        description: "Weather site allowing users to find weather for any city in the world, and see that city's current weather, hourly forecast, and 6-day forecast.",
        toolsUsed: "HTML, JS, CSS, CSS Flexbox, and an API."
    },
    {
        img: "front-end-programming.png",
        title: "Personal Website",
        site: "",
        description: "This Website! You can get some information about me, including my skillset, some projects I've worked on, and my resume.",
        toolsUsed: "HTML, JS, TS, CSS, CSS Grid, CSS Flexbox, React, and Next.js"
    },
    {
        img: "basketball.png",
        title: "Fantasy Basketball",
        site: "",
        description: "Website allowing users to join or create fantasy basketball leagues",
        toolsUsed: "HTML, CSS, JS, React, Node.js, Express, and an API"
    }
]

export default function(){

    return (
        <>
            <div className={styles.portfolioSection}>
                <div className="spaceDiv"></div>
                <h1 className="sectionHeader">Portfolio</h1>
                
                <div className={styles.cardsContainer}>
                    {portfolioItems.map((item, i) => {return <Card info={item} openModal={openModal} key={i}/>})}
                </div>
                
                <div id="modal" className={styles.modal} onClick={(e) => closeModal(e)}>
                    <div id="modalContent" className={styles.modalContent}>
                        <div id="exitBtn" className={styles.exitBtn} onClick={(e) => closeModal(e)}>
                            <h1 id="exitText" className={styles.exitText}>&times;</h1>
                        </div>
                        {/* <div style={{ textAlign: "center" }}>
                            <img id="image" className={styles.modalContentImg}/>
                            <h1 id="modalTitle"></h1>    
                        </div> */}
                        <div>
                            <div style={{ textAlign: "center"}}>
                                <h1 id="modalTitle"></h1>    
                            </div>
                            
                            <p id="description"></p>
                            <p id="toolsUsed"></p>   
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

function openModal(info: any){
    let modalTitle = document.getElementById("modalTitle")
    modalTitle ? modalTitle.innerHTML = `${info.title}` : null
    // if(info.title === "Minesweeper")
    //     modalTitle ? modalTitle.innerHTML = "Mine-\nsweeper" : null    
    // else
    //     modalTitle ? modalTitle.innerHTML = `${info.title}` : null

    let image = document.getElementById("image")
    image ? image.setAttribute("src", info.img) : null

    let desc = document.getElementById("description")
    desc ? desc.innerHTML = "<b>Description: </b>" + info.description : null

    let toolsUsedText = document.getElementById("toolsUsed")
    toolsUsedText ? toolsUsedText.innerHTML = "<b>Stack: </b>" + info.toolsUsed : null

    let modal = document.getElementById("modal")
    modal ? modal.style.display = "block" : null
    document.body.style.overflow = "hidden"
}

function closeModal(e: any){
    if(e.target.id == "modal" || e.target.id == "exitBtn" || e.target.id == "exitText"){
        let modal = document.getElementById("modal")
        modal ? modal.style.display = "none" : null
        document.body.style.overflow = "scroll"    
    }
    
}
