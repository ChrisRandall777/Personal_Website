"use client"
import React from 'react'
import "../globals.css"
import styles from "./Contact.module.css"
import Head from 'next/head'
import emailjs from "@emailjs/browser"

const Contact = () => {
  return (
    <>
        <div className={styles.contactSection}>
            <div className="spaceDiv"></div>
            <h1 className='sectionHeader'>Contact Info</h1>
            <div className={styles.contactContainer}>
                <div>
                    <h1 style={{marginTop: "0"}}>Get in touch</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td><img className={styles.image} src="communication.png"/></td>
                                <td><p>chrisrandallvh@gmail.com</p></td>
                            </tr>
                            <tr>
                                <td><a href="https://www.linkedin.com/in/chrisrandall99" target="_blank"><img className={styles.image} src="linkedin.png"/></a></td>
                                <td><p>linkedin.com/in/chrisrandall99</p></td>
                            </tr>
                            <tr>
                                <td><img className={styles.image} src="phone-call.png"/></td>
                                <td><p>847-257-5747</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <form id="form" onSubmit={(e) => { 
                            e.preventDefault()
                            let form = document.getElementById("form") as HTMLFormElement
                            let data = new FormData(form)
                            let name = data.get("nameInput")
                            let email = data.get("emailInput")
                            let msg = data.get("msgInput")

                            if(name == ""){
                                alert("please enter a name")
                            } else if(email == ""){
                                alert("please enter an email")
                            } else if(msg == ""){
                                alert("please enter a message")
                            } else {
                                let btn = document.getElementById("submitBtn") as HTMLInputElement
                                btn.value = ("sending...")

                                emailjs.sendForm("service_2ae6jzq", "template_b40x4u9", form, {
                                    publicKey: "86jzy4t4DpFHFgdNN"
                                })
                                    .then(() => {
                                            btn.value = "Submit"
                                            let nameEle = document.getElementById("nameInput") as HTMLInputElement
                                            nameEle.value = ""
                                            let emailEle = document.getElementById("emailInput") as HTMLInputElement
                                            emailEle.value = ""
                                            let msgEle = document.getElementById("msgInput") as HTMLInputElement
                                            msgEle.value = ""
                                            alert("Form Sent!")
                                    }, (err) => {
                                            alert("Sorry, their was an error sending the form")
                                    })
                            }

                         }}>
                        <label className={styles.label}>Name:</label><br></br>
                        <input id="nameInput" name="nameInput" className={styles.input} type="text"></input><br></br>
                        <label className={styles.label}>Email:</label><br></br>
                        <input id="emailInput" name="emailInput" className={styles.input} type="text"></input><br></br>
                        <label className={styles.label}>Message:</label><br></br>
                        <textarea id="msgInput" name="msgInput" className={`${styles.input} ${styles.message}`} placeholder="type message here..."></textarea><br></br>
                        <input id="submitBtn" type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
