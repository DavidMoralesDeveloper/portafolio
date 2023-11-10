
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';import "./Contacto.css";
export const Contacto = () => {

    const form = useRef();
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            console.log('message send')
            e.target.reset();
            setFormularioEnviado(true);
            
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div id='contacto' className="container-contacto">
      <div className="container-titulo">
        <h2 className="titulo-protafolio">Contacto</h2>
      </div>
      <div className="text-contacto">
      {formularioEnviado && <p>Mensaje enviado correctamente</p>}
      </div>

      <form className="form-contacto" ref={form} onSubmit={sendEmail}>
 
          <input className="input-contcto"  type="text" name="user_name" placeholder="NOMBRE" />

          <input className="input-contcto" type="email" name="user_email" placeholder="EMAIL" />
          <textarea className="input-contcto" type="textarea" name="message" placeholder="MENSAJE" />


        <button className="button-form" type="submit" value="Send">Enviar</button>
      </form>
    </div>
  );
};
