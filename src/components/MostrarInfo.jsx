import PropTypes from "prop-types";
// import { Slide } from './Slide';
// import { useRef, useState, useEffect } from "react";

import { BiArrowBack } from "react-icons/bi";
import "./Portafolio.css";

function MostrarInfo({ proyecto, onClick }) {
 

  return (
    <div className="mostrar-info">
      <button className="button-info" onClick={onClick}>
        <BiArrowBack />
      </button>
      <h2>{proyecto.titulo}</h2>
      <p>{proyecto.descripcion}</p>
      <a href={proyecto.enlace} target="_blank" rel="noreferrer">
        Ver página web
      </a>
      {proyecto.tecnologias.map((tec, index) => (
        <div className="tec-info" key={index}>
          {tec.tecnologia}
        </div>
      ))}

      {/* --------------------------------------- */}

      <div className="slider-container">
        
        <div className="images-contaimer">
          
          <ul >
            {proyecto.imagesSlider.map((img) => (
              <li key={img.id}>
                {console.log(img.imgUrl)}
                <img src={img.imgUrl} className="img-slide" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

MostrarInfo.propTypes = {
  proyecto: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MostrarInfo;
