import { h } from "preact";
import { useFormNetlify } from "../../hooks/customHooks";
export default function Formulario() {
  //const { inputs, handleInputChange, handleSubmit } = useFormHook();
  const { state, handleChange, handleSubmit } = useFormNetlify({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="form"
    >
      <input type="hidden" name="form-name" value="contact" />
      
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
      {/* <p class="form-alert success">
        ¡Mensaje enviado!
        <br />
        Nos pondremos en contacto contigo lo antes posible.
      </p>
      <p class="form-alert error">
        Error al enviar.
        <br />
        Inténtalo de nuevo, por favor.
      </p> */}
    </form>
  );
}
