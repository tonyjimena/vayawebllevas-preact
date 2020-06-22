import React from "preact/compat";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: "", email: "", telefono: "", mensaje: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { nombre, telefono, email, mensaje } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        id="form"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <input
            onChange={this.handleChange}
            value={nombre}
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
            onChange={this.handleChange}
            value={telefono}
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
            onChange={this.handleChange}
            value={email}
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
            onChange={this.handleChange}
            value={mensaje}
            type="text"
            id="mensaje"
            name="mensaje"
            required
            placeholder=" "
          />
          <label for="mensaje">Cuéntanos tu proyecto</label>
        </div>
        <input type="submit" value="Enviar" class="butt butt-main butt-form" />

        {/* <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p> */}
      </form>
    );
  }
}

//ReactDOM.render(<ContactForm />, document.getElementById("root"));
//import { useFormNetlify } from "../../hooks/customHooks";
// export default function Formulario() {
//   //const { inputs, handleInputChange, handleSubmit } = useFormHook();
//   // const { state, handleChange, handleSubmit } = useFormNetlify({
//   //   nombre: "",
//   //   email: "",
//   //   telefono: "",
//   //   mensaje: "",
//   // });

//   return (
//     <form
//       onSubmit={handleSubmit}
//       name="contact"
//       method="post"
//       data-netlify="true"
//       data-netlify-honeypot="bot-field"
//       id="form"
//     >
//       <input type="hidden" name="form-name" value="contact" />

//       <div>
//         <input
//           onChange={handleChange}
//           value={state.nombre}
//           type="text"
//           id="nombre"
//           name="nombre"
//           required
//           placeholder=" "
//         />
//         <label for="nombre">Nombre</label>
//       </div>

//       <div>
//         <input
//           onChange={handleChange}
//           value={state.telefono}
//           type="text"
//           id="telefono"
//           name="telefono"
//           required
//           placeholder=" "
//           pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
//         />
//         <label for="telefono">Teléfono</label>
//       </div>

//       <div class="mail">
//         <input
//           onChange={handleChange}
//           value={state.email}
//           type="email"
//           id="email"
//           name="email"
//           required
//           placeholder=" "
//         />
//         <label for="email">Email</label>
//       </div>

//       <div class="mensajito">
//         <textarea
//           onChange={handleChange}
//           value={state.mensaje}
//           type="text"
//           id="mensaje"
//           name="mensaje"
//           required
//           placeholder=" "
//         />
//         <label for="mensaje">Cuéntanos tu proyecto</label>
//       </div>
//       <input type="submit" value="Enviar" class="butt butt-main butt-form" />
//       {/* <p class="form-alert success">
//         ¡Mensaje enviado!
//         <br />
//         Nos pondremos en contacto contigo lo antes posible.
//       </p>
//       <p class="form-alert error">
//         Error al enviar.
//         <br />
//         Inténtalo de nuevo, por favor.
//       </p> */}
//     </form>
//   );
// }
