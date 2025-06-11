"use client"
import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  let vis = false
  function exitAttr(){
    let popUp = document.getElementById("popUp")
    if(vis){
      popUp ? popUp.style.display = "none" : null
      vis = false
    } else{
      popUp ? popUp.style.display = "block" : null
      vis = true
    }
  }

  return (
    <>
      <div className={styles.footerSection}>
        <div id="popUp" className={styles.attributionsPopUp}>
          <div className={styles.exitBtn} onClick={exitAttr}>
            <h1 className={styles.exitText}>&times;</h1>
          </div>

          <div style={{padding: "30px 5px"}}>
            <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/node-js" title="node js icons">Node js icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">Ui icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/bomb" title="bomb icons">Bomb icons created by vectorsmarket15 - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/ui-design" title="ui-design icons">Ui-design icons created by ekays.dsgn - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/basketball" title="basketball icons">Basketball icons created by GOWI - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/interaction" title="interaction icons">Interaction icons created by Enamo Studios - Flaticon</a><br></br>
            <a href="https://www.flaticon.com/free-icons/phone-number" title="phone number icons">Phone number icons created by lakonicon - Flaticon</a><br></br>
          </div>
          
        </div>
        <p className={styles.attrText} onClick={exitAttr}>Attributions</p>

      </div>

    </>
  )
}

export default Footer
