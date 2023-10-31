import PropTypes from "prop-types";
// import { Slide } from './Slide';
import { useRef, useState, useEffect } from "react";

import { BiArrowBack } from "react-icons/bi";
import "./Portafolio.css";

function MostrarInfo({ proyecto, onClick }) {
  const listRef = useRef();
  const [currentIndex, ] = useState(0);
  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // const scrollToImage = (direction) => {
  //   if (direction === "prev") {
  //     setCurrentIndex((curr) => {
  //       const isFirstSlide = currentIndex === 0;
  //       return isFirstSlide ? 0 : curr - 1;
  //     });
  //   } else {
  //     const isLastSlide = currentIndex === proyecto.imagesSlider.length - 1;
  //     if (!isLastSlide) {
  //       setCurrentIndex((curr) => curr + 1);
  //     }
  //   }
  // };

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
        Creando Slider ......
        {/* <div className="leftArrow" onClick={() => scrollToImage("prev")}>
          &#10092;
        </div>
        <div className="rightArrow" onClick={() => scrollToImage("next")}>
          &#10093;
        </div> */}
        <div className="images-contaimer">
          <ul ref={listRef}>
            {proyecto.imagesSlider.map((img) => (
              <li key={img.id}>
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
