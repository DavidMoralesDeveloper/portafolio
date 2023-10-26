import { useState } from "react";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {FaRegNewspaper} from "react-icons/fa"
// import Spline from '@splinetool/react-spline';
import "./Navbar.css";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <header>
      <div className="button-div">
        <button className="hamburger-button" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`right-div ${menuVisible ? "visible" : ""}`}>
        {/* <div className="spline"><Spline scene="https://prod.spline.design/63SPrWDK2WscTkaN/scene.splinecode"  /></div> */}
        <h1 className="menu-h1">David Morales</h1>
        <nav className="menu-nav">
          <ul className="menu-ul">
            <li className="menu-li">
              {" "}
              <a href="#">Inicio</a>{" "}
            </li>
            <li className="menu-li">
              {" "}
              <a href="#">Acerca de mi</a>{" "}
            </li>
            <li className="menu-li">
              {" "}
              <a href="#">Portafolio</a>{" "}
            </li>
            <li className="menu-li">
              {" "}
              <a href="#">Skills</a>{" "}
            </li>
            <li className="menu-li">
              {" "}
              <a href="#">Contacto</a>{" "}
            </li>
          </ul>
          <div className="icons-nav">
            <a href="https://github.com/DavidMoralesDeveloper" target="_blank"rel="noreferrer" className="icon-links">

              < AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/david-morales-developer/" target="_blank"rel="noreferrer"  className="icon-links">

              < AiFillLinkedin />
            </a>
            <a href="https://github.com/DavidMoralesDeveloper" target="_blank"rel="noreferrer" className="icon-links">

              < FaRegNewspaper />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
