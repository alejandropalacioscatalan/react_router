import React from "react";
import torta from "../src/assets/torta.png";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <div className="contenedor">
        <h1>Bienvenido a Happy Cake</h1>
        <h3>El lugar de los pasteles felices</h3>
        <img
          src={torta}
          alt="torta"
          style={{ width: "100px", height: "100px" }}
        />{" "}
        {/* Inserta la imagen */}
        <br />
      </div>
    </>
  );
};

export default HomePage;
