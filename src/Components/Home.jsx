/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useRef } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/MLSA_TO_Home-JEVG.png";

const imageAltText =
  "DALLE AI image from MLSA thecnical Onboarduing using Azure, GitHub and Copilot";

// En tu componente Home.jsx

const Home = ({ name, title }) => {
  const aboutRef = useRef(null); // Referencia para la sección About

  // eslint-disable-next-line no-unused-vars
  const scrollIntoAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />

      {/* Div con fondo oscuro y opacidad */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Estilo para las etiquetas h1 y h2, centradas y en la parte inferior de la sección */}
      <div
        style={{
          position: "absolute",
          bottom: "6rem",
          left: "50%",
          transform: "translateX(-50%)", // Centrar horizontalmente
          textAlign: "center", // Alinear texto al centro
          color: "white",
          zIndex: 1,
        }}
      >
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>

      {/* Flecha en la parte baja de la sección */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        {/* Usar enlace alrededor de la imagen de la flecha */}
        <a href="#about" style={{ cursor: "pointer" }}>
          <img
            src={arrowSvg}
            style={{ height: "3rem", width: "3rem" }}
            alt={imageAltText}
            onMouseOver={(e) => (e.currentTarget.style.opacity = 0.7)}
            onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
            onFocus={(e) => (e.currentTarget.style.opacity = 0.7)}
            onBlur={(e) => (e.currentTarget.style.opacity = 1)}
          />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
