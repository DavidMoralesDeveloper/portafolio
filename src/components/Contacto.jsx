
import { useRef } from 'react';
import emailjs from '@emailjs/browser';import "./Contacto.css";
export const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="container-contacto">
      <div className="container-titulo">
        <h2 className="titulo-protafolio">Contacto</h2>
      </div>
      <div className="text-contacto">
      En desarrollo
        <p></p>
      </div>

      <form className="form-contacto" ref={form} onSubmit={sendEmail}>
        <label className="lavel-contacto">
          {/* Nombre: */}
          <input className="input-contcto" type="text" name="name" placeholder="NOMBRE" />
        </label>
        <label>
          {/* Email: */}
          <input className="input-contcto" type="email" name="email" placeholder="EMAIL" />
        </label>
        <label>
          {/* Texto: */}
          <textarea className="input-contcto" type="textarea" name="textarea" placeholder="MENSAJE" />
        </label>

        <button className="button-form" type="submit">Enviar</button>
      </form>
    </div>
  );
};
