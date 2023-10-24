import videoP from '../images/perfil_animation.mp4'
import "./Head.css";

export const Head = () => {
  return (
    <>
      <div className="left-div">
          <div className="photo">
            {/* <img className="img-perfil" src={perfil} />  */}
            <video src={videoP} autoPlay loop muted />
          </div>
          <div className="perfil-h1">
            <h1>Soy<br/> <span>David</span> <br /><span>Morales</span></h1>
          </div>
      </div>
    </>
  );
};
