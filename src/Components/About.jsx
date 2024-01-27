/**
 * About component
 *
 * This is a space for you to learn more about a 21-year-old Mexican guy,
 * passionate about Mechatronics Engineering and technology.
 */

import React from "react";

import image from "../images/MLSA_TO_About2-JEVG.png";

const imageAltText = "DALLE AI image from MLSA thecnical Onboarduing";

const description =
  "I'm a student of Mechatronics Engineering at UPIITA - IPN, with a passion for technology, soccer, and video games. I am always keen to learn and share my knowledge.";
// Updated skills list
const skillsList = [
  "Java, JavaScript",
  "C/C++, C#",
  "Python, PHP, Matlab",
  "VHDL, Assembly language",
  "Ladder diagrams, Pneumatic methods",
  "HTML, CSS, Node.js, SQL - MySQL, Git",
  "GitHub, Azure, WordPress",
  "Microsoft 365, GIMP, Canva",
  "NetBeans, MikroC, Visual Studio Code, Matlab",
  "SolidWorks, AutoCad, Proteus, FluidSIM, ISE Design, Multisim, OrCAD, STEP7 MicroWIN",
];

const detailOrQuote =
  "As a Microsoft Learn Student Ambassador Alpha, I am dedicated to exploring and learning new technologies. Curious and introverted in new spaces, I am committed to my studies and excited about the future of engineering and technology.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "60%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <hr />
        <h3>Skills</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
