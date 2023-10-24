import { MdOutlineDeviceHub } from 'react-icons/md'
import { SiCircuitverse } from 'react-icons/si'
import { TbTriangleSquareCircle, TbCircleTriangle } from 'react-icons/tb'
import "./About.css";
export const About = () => {
  return (
    <div className="conteiner-about">
      <div className="text-about">
        <h2 className="titulo-about">Acerca de mi</h2>
        <p>
          Soy una persona que valora la libertad de explorar el mundo y aprender
          de él. Mi pasión por la naturaleza me ha inspirado a abrazar la
          diversidad y la belleza que la rodea. Veo los desafíos como
          oportunidades para aprender y crecer, tomando inspiración de la
          naturaleza misma, que ha encontrado soluciones ingeniosas para sus
          propios desafíos a lo largo de la historia. Esta mentalidad de
          resiliencia y adaptabilidad me guía en la resolución de problemas, ya
          que me impulsa a buscar soluciones creativas y sostenibles. Estoy
          emocionado por el viaje continuo de aprendizaje y autodescubrimiento
          mientras navego por el mundo y sus desafíos.
        </p>
      </div>
      <div className="perfil-demo">
        
        <a className="about-a" href="#">
          {" "}
           DESCARGA CV
        </a>
        <a className="about-a" href="#">
          {" "}
          PORTAFOLIO
        </a>
      </div>

      <div className="cards-container">
        <div className="card">
          <TbCircleTriangle className='about-icons'/>
          <h2>Adaptabilidad</h2>
          <p> Enfrentar desafíos cambiantes con confianza, encontrar soluciones innovadoras y mantenerse al día en un campo en constante transformación.</p>
        </div>
        <div className="card">
          <MdOutlineDeviceHub className='about-icons'/>
          <h2>Desarrollo</h2>
          <p> Cada línea de código que escribo es como un ladrillo que contribuye a la construcción de experiencias en línea.</p>
        </div>
        <div className="card">
          <TbTriangleSquareCircle className='about-icons'/>
          <h2>Diseño</h2>
          <p>Cada elemento de diseño, desde la disposición de los elementos hasta la elección de colores y tipografías, tiene un propósito en la narrativa de la página web.</p>
        </div>
        <div className="card">
          <SiCircuitverse  className='about-icons'/>
          <h2>Seo</h2>
          <p> El trabajo que realizo no solo sea impactante visualmente, sino también efectivo en alcanzar a un público más amplio y aumentar la presencia en línea de la página web.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
