import { useState } from "react";
import MostrarInfo from "./MostrarInfo";
import plomeria from "../images/plomeria-page.png";
import meencotre from "../images/meencotre-page.png";
import reposo from "../images/reposo-page.png";
import fisioterapia from "../images/fisioterapia-page.png";
import blogPplomeria from "../images/detalles/plomeria-page/plomeria-blog.png";
import plomeriaPlomeria from "../images/detalles/plomeria-page/plomeria-plomeria.png";
import plomeriaServicios from "../images/detalles/plomeria-page/plomeria-servicios.png";
import yentoncesCard from "../images/detalles/yentonces-page/yentonces-card.png";
import yentoncesPay from "../images/detalles/yentonces-page/yentonces-pay.png";
import yentoncesContacto from "../images/detalles/yentonces-page/yentonces-contacto.png";
import casadeServicios from "../images/detalles/casade-page/casade-servicios.png";
import casadeInfo from "../images/detalles/casade-page/casade-info.png";
import casadeContacto from "../images/detalles/casade-page/casade-contacto.png";
import quiroCards from "../images/detalles/quiro-page/quiro-cards.png";
import quiroPresent from "../images/detalles/quiro-page/quiro-presentacion.png";
import quiroInfo from "../images/detalles/quiro-page/quiro-info.png";
import "./Portafolio.css";

const proyectos = {
  proyecto1: {
    imagen: plomeria,
    titulo: "Plomeria | Expertos",
    descripcion:
      "Desarrollador web con experiencia en la creación de sitios altamente optimizados para motores de búsqueda (SEO) mediante la tecnología Next.js. Especializado en diseño web responsivo para ofrecer una experiencia de usuario excepcional en diferentes dispositivos. Mi enfoque es combinar la eficiencia de Next.js con un diseño adaptable para maximizar el rendimiento y la visibilidad en línea.",
    puesto: "Desarrollo Front-end y SEO",
    enlace: "https://www.plomeriaydrenajes.com.mx/",
    tecnologias: [
      { tecnologia: "Next.js" },
      { tecnologia: "SEO" },
      { tecnologia: "Google Search Console" },
    ],
    imagesSlider : [
      {
       imgUrl: blogPplomeria
      },
      {
       imgUrl: plomeriaPlomeria
      },
      {
       imgUrl: plomeriaServicios
      }
    ]
  },
  proyecto2: {
    imagen: meencotre,
    titulo: "Y entonces me encotre",
    descripcion:
      "Desarrollador web y diseñador de página de reprogramación mental. Trabajada en WordPress y Elementor, con experiencia en diseño y personalización de sitios web de comercio electrónico, así como la implementación de funciones de programación de citas para un óptimo servicio al cliente.",
    puesto: "Desarrollo Front-end ",
    enlace: "https://yentoncesmeencontre.com/",
    tecnologias: [
      { tecnologia: "WordPress" },
      { tecnologia: "Elementor" },
      { tecnologia: "Wocoomerce" },
    ],
    imagesSlider : [
      {
        imgUrl: yentoncesCard
      },
      {
        imgUrl: yentoncesPay
      },
      {
        imgUrl: yentoncesContacto
      }
    ]
  },
  proyecto3: {
    imagen: reposo,
    titulo: "Casa de reposo ",
    descripcion:
      " Casa de Reposo La Vida es Bella, creado con HTML, CSS y JavaScript. Totalmente responsive y con contenido original, este sitio ofrece una experiencia en línea excepcional para aquellos que buscan servicios de cuidado de calidad para personas mayores en un entorno acogedor y seguro.",
    puesto: "Desarrollo Front-end y SEO",
    enlace: "https://www.casadereposolavidaesbella.com/",
    tecnologias: [
      { tecnologia: "HTML" },
      { tecnologia: "CSS" },
      { tecnologia: "JS" },
      { tecnologia: "Google Search Console" },
    ],
    imagesSlider : [
      {
        imgUrl: casadeServicios
      },
      {
        imgUrl: casadeInfo
      },
      {
       imgUrl: casadeContacto
      }
    ]
  },
  proyecto4: {
    imagen: fisioterapia,
    titulo: "Fisioterapia y Quiropráctica",
    descripcion:
      "Este sitio web sirve como un recurso valioso para la comunidad en busca de servicios de fisioterapia y quiropráctica. Ofrece información detallada sobre los servicios, especializaciones y profesionales de la salud disponibles. Los elementos visuales y el diseño se han cuidadosamente adaptado para proporcionar una experiencia informativa y agradable.",
    puesto: "Desarrollo Front-end y SEO",
    enlace: "https://www.fisioterapiayquiropractica.com.mx/",
    tecnologias: [{ tecnologia: "React" }, { tecnologia: "CSS " }],
    imagesSlider : [
      {
        imgUrl: quiroCards
      },
      {
        imgUrl: quiroPresent
      },
      {
        imgUrl: quiroInfo
      }
    ]
  },
};

export const Portafolio = () => {
  const [mostrarInformacion, setMostrarInformacion] = useState(false);

  const toggleInformacion = () => {
    setMostrarInformacion(!mostrarInformacion);
  };

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const handleProyectoClick = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };
  return (
    <div id="portafolio" className="portafolio-container">
      <div className="container-titulo">
        <h2 className="titulo-protafolio">Portafolio</h2>
      </div>

      {/* <div className="text-portafolio">
        <p className="subtitulo-portafolio">
          {" "}
          Cada línea de código que escribo es como un ladrillo que contribuye a
          la construcción de experiencias en línea. Mi creatividad se combina
          con mis habilidades técnicas para dar vida a sitios web y
          aplicaciones, lo que me llena de satisfacción y orgullo.
        </p>
      </div> */}

      <div className="section-imagenes-container">
        {mostrarInformacion ? (
          <MostrarInfo
            proyecto={proyectoSeleccionado}
            onClick={() => toggleInformacion(false)}
          />
        ) : (
          // Mostrar imágenes de proyectos
          Object.entries(proyectos).map(([clave, proyecto]) => (
            <div className="imagenes-hover" key={clave}>
              {console.log(proyecto.imagen)}
              <img src={proyecto.imagen} alt={`Imagen del proyecto ${clave}`} />
              <div className="capa-portafolio">
                <button
                  onClick={() => {
                    handleProyectoClick(proyecto);
                    toggleInformacion();
                    
                  }}
                >
                   <a href="#portafolio" className="top-portafolio">Leer Mas</a>
                </button>
                <h2>{proyecto.titulo}</h2>
                <p>{proyecto.puesto}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
