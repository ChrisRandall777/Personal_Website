import styles from "./page.module.css";
import Spacer from "./Components/Spacer";
import NavBar from "./Components/NavBar";
import Name from "./Components/Name";
import CircleTransition from "./Components/CircleTransition";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skillls"
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
import ThemeToggle from "./Components/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chris's Website"
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Spacer />
      <div id="name"><Name /></div>
      <CircleTransition circleColor="var(--background-color2)" backgroundColor="var(--background-color)"/>
      <div id="aboutme"><AboutMe /></div>
      <CircleTransition circleColor="var(--background-color)" backgroundColor="var(--background-color2)"/>
      <div id="skills"><Skills /></div>
      <CircleTransition circleColor="var(--background-color2)" backgroundColor="var(--background-color)"/>
      <div id="portfolio"><Portfolio /></div>
      <CircleTransition circleColor="var(--background-color)" backgroundColor="var(--background-color2)"/>
      <div id="contact"><Contact /></div>
      <Footer />
      <ThemeToggle />
    </>
  );
}
