import styles from "./page.module.css";
import "./globals.css";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skillls"
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <div id="aboutme"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
