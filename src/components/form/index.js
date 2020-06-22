import { h } from "preact";
import useFormHook  from "../../hooks/customHooks";
export default function Formulario() {
 
  const { inputs, handleInputChange, handleSubmit } = useFormHook();

  return (
    <form onSubmit={handleSubmit} method="POST" id="form">
      <div>
        <input
          onChange={handleInputChange}
          value={inputs.nombre}
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
          onChange={handleInputChange}
          value={inputs.telefono}
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
          onChange={handleInputChange}
          value={inputs.email}
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
          onChange={handleInputChange}
          value={inputs.mensaje}
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
