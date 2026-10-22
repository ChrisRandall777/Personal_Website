"use client"
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
    },
    {
        img: "slot-machine.png",
        title: "Slot Game",
        site: "https://chrisrandall777.github.io/Slot/",
        description: "Slot game including multiple features such as free spins, auto-spinning, and the chance for symbols to upgrade",
        toolsUsed: "HTML, CSS, JS, CSS Flexbox, and CSS Animations"
    }
]

export default function(){

    return (
        <>
            <div className={styles.portfolioSection}>
                <h1 className="sectionHeader">Portfolio</h1>
                
                <div className={styles.cardsContainer}>
                    {portfolioItems.map((item, i) => {return <Card key={i} info={item}/>})}
                </div>
            </div>
        </>
    )
}
