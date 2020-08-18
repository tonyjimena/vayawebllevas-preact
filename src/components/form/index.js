import { h } from "preact";
import { useState } from "preact/hooks";
// import {
//   GoogleReCaptchaProvider,
//   GoogleReCaptcha,
// } from "react-google-recaptcha-v3";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Formulario() {
  const [state, setState] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState(null);
  // const [token, setToken] = useState("");

  const renderComponent = () => {
    switch (success) {
      case true:
        return (
          <p class="form-alert success">
            ¡Mensaje enviado!
            <br />
            Nos pondremos en contacto contigo lo antes posible.
          </p>
        );
      case false:
        return (
          <p class="form-alert error">
            Error al enviar.
            <br />
            Inténtalo de nuevo, por favor.
          </p>
        );

      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // grecaptcha.ready(function () {
    //   grecaptcha
    //     .execute('6LcmcaUZAAAAAJ0QonxcuozY_sjAGlNQDaeY8qQI', {
    //       action: 'submit',
    //     })
    //     .then(function (token) {
    //       // Add your logic to submit to your backend server here.
    //       //console.log(token)
    //       $('form').prepend(
    //         '<input type="hidden" name="g-recaptcha-response" value="' +
    //           token +
    //           '">'
    //       )
    //     }).then(() => {
    fetch("https://vayawebllevas.com/dev/vayavaya/form.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        // "g-recaptcha-response": token,
        ...state,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response == "success") {
          setSuccess(true);
        } else {
          console.log(response);
          setSuccess(false);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit} id="form">
      <div>
        <input
          onChange={handleChange}
          value={state.nombre}
          type="text"
          id="nombre"
          name="nombre"
          required
          placeholder=" "
        />
        <label for="nombre">Nombre</label>
      </div>
      <div>
        <input
          onChange={handleChange}
          value={state.telefono}
          type="text"
          id="telefono"
          name="telefono"
          required
          placeholder=" "
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        />
        <label for="telefono">Teléfono</label>
      </div>
      <div class="mail">
        <input
          onChange={handleChange}
          value={state.email}
          type="email"
          id="email"
          name="email"
          required
          placeholder=" "
        />
        <label for="email">Email</label>
      </div>
      <div class="mensajito">
        <textarea
          onChange={handleChange}
          value={state.mensaje}
          type="text"
          id="mensaje"
          name="mensaje"
          required
          placeholder=" "
        />
        <label for="mensaje">Cuéntanos tu proyecto</label>
      </div>
      <input type="submit" value="Enviar" class="butt butt-main butt-form" />
      {renderComponent()}
      {/* <GoogleReCaptchaProvider reCaptchaKey="6LcmcaUZAAAAAJ0QonxcuozY_sjAGlNQDaeY8qQI">
        <GoogleReCaptcha onVerify={(token) => setToken(token)} />
      </GoogleReCaptchaProvider> */}
    </form>
  );
}
