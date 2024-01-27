/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/MLSA_TO_Portafolio-JEVG.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */

const NaltonPaiyProject = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "1rem", marginBottom: "3rem" }}>
      <h3 style={{ textAlign: "center" }}>NALTON PAIY APP</h3>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "top" }}>
        <div style={{ flex: 1 }}>
          <h4>Description</h4>
          <p>
            Cryptocurrency project: The proposal is an innovative application designed to facilitate
            user interaction with financial transactions, using Ripple&rsquo;s XRPL (XRP Ledger
            Testnet) as a demonstration platform. This advanced system allows users to execute
            transactions simply and directly, using text or voice commands.
          </p>
          <a
            href="https://lp-nalton-3b514b803893.herokuapp.com/ecosystem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Landing Page
          </a>
        </div>

        <div style={{ flex: 1 }}>
          <h4>Azure implementation:</h4>
          <p>Migrate to a more comprehensive cloud solution like Azure Cloud:</p>
          <ul>
            <li>Use key vault to save the secrets keys</li>
            <li>Use Azure Cosmos Db to save the images</li>
            <li>Use the Azure open AI services for full Azure Cloud connection Apis</li>
          </ul>
          <a
            href="https://github.com/JoseEmmanuelVG/-Ambassador-AI-Project---Nalton-pAIy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ambassador-AI-Project
          </a>
        </div>
      </div>
    </div>
  );
};

const projectList = [
  {
    title: "Bonzopedia",
    description:
      "Bonzopedia is a page created to develop in a comparative way diverse topics and to solve doubts, discovering the truth by learning in a comparative way..",
    url: "https://bonzopedia.com/",
  },
  {
    title: "Smart-Fridge-CheckList",
    description:
      "Design model applying object-oriented programming concepts to create an application related to Industry 4.0 and the Internet of Things.",
    url: "https://github.com/JoseEmmanuelVG/Smart-Fridge-CheckList",
  },
  {
    title: "NASA-SPACE-APPS-CHALLENGE-2021---JEVG",
    description:
      "Create prototypes and methodologies to incorporate Earth observations with local open data for identifying risks with science and communities.",
    url: "https://github.com/JoseEmmanuelVG/NASA-SPACE-APPS-CHALLENGE-2021---JEVG",
  },
  {
    title: "PRACTICAS LaunchX-InnovaccionVirtual FRONTEND",
    description:
      "The Launch X LATAM initiative helps young Latin Americans to become certified as developers. It includes Git basics, programming, CSS, HTML, VueJs, Veux, JavaScript, OOP, database management and Angular..",
    url: "https://joseemmanuelvg.github.io/FrontEnd-Mision_JEVG.html",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <NaltonPaiyProject />
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
