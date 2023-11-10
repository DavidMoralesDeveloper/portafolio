import { Navbar } from "./components/Navbar";
import {Head} from './components/Head'
import {About} from './components/About'
import { Portafolio } from "./components/Portafolio";
// import { Skills } from "./components/Skills";
import { Contacto } from "./components/Contacto";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
      <Navbar />
      <Head />
      <About />
      <Portafolio />
      {/* <Skills /> */}
      <Contacto />
      </div>
    </>
  );
}

export default App;
