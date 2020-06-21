import { h } from "preact";

export default function Formulario() {
  return (
    <form action="/dev/vayavaya/form.php" method="POST" id="form">
      <div>
        <input type='text' id="nombre" name="nombre" required placeholder=" " />
        <label for="nombre">Nombre</label>
      </div>

      <div>
        <input
          type='text'
          id="telefono"
          name="telefono"
          required
          placeholder=" "
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        />
        <label for="telefono">Teléfono</label>
      </div>

      <div class="mail">
        <input type="email" id="email" name="email" required placeholder=" " />
        <label for="email">Email</label>
      </div>

      <div class="mensajito">
        <textarea
          type="text"
          id="mensaje"
          name="mensaje"
          required
          placeholder=" "
        />
        <label for="mensaje">Cuéntanos tu proyecto</label>
      </div>
      <input type="submit" value="Enviar" class="butt butt-main butt-form" />
      <p class="form-alert success">
        ¡Mensaje enviado!
        <br />
        Nos pondremos en contacto contigo lo antes posible.
      </p>
      <p class="form-alert error">
        Error al enviar.
        <br />
        Inténtalo de nuevo, por favor.
      </p>
    </form>
  );
}
