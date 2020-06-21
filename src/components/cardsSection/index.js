import { h } from "preact";
import { useState } from "preact/hooks";

import CardComponent from "../cardComponent";

export default function CardsSection() {
  const [tipos] = useState(["comercial", "corporativa", "blog", "tienda"]);
  const [info] = useState([
    "Perfecta para dar a conocer tu tienda, cafetería, restaurante...",
    "Perfecta para dar a conocer los servicios que ofreces en tu asesoría, bufete...",
    "Perfecto para compartir con el mundo tus viajes, ideas...",
    "Perfecto para ampliar tu mercado y vender tus productos por internet.",
  ]);
  const [details] = useState([
    <div>
      <p>
        Que tu web sea tu tarjeta de visita.
        <br />
        Una página que dé a conocer tu negocio de forma clara y directa.
        <br />
      </p>
      <p>Una web comercial se suele componer de:</p>
      <ul>
        <li>Una página con la imagen corporativa de tu negocio.</li>
        <li>Información de contacto y redes sociales.</li>
        <li>Formulario de contacto para que los clientes lleguen a ti.</li>
        <li>Precio aproximado: 150€ - 300€.</li>
      </ul>
    </div>,
    <div>
      <p>
        Crea la identidad online de tu negocio.
        <br />
        Una página que dé a conocer los servicios que ofreces y facilita que tus
        clientes lleguen a ti.
        <br />
      </p>
      <p>Una web corporativa se suele componer de:</p>
      <ul>
        <li>Información sobre la empresa</li>
        <li>Servicios ofrecidos</li>
        <li>Blog (imprescindible para el SEO)</li>
        <li>Página de contacto con formulario</li>
        <li>Precio aproximado: 300€ - 1000€</li>
      </ul>
    </div>,
    <div>
      <p>
        Conecta con el mundo a través de tu blog.
        <br />
        Una página en la que compartas tus experiencias, pensamientos, ideas...
        <br />
      </p>
      <p>Un blog se suele componer de:</p>
      <ul>
        <li>Una página con tus últimas publicaciones.</li>
        <li>Una sección de presentación.</li>
        <li>Información de contacto y redes sociales.</li>
        <li>Precio aproximado: 150€ - 250€.</li>
      </ul>
    </div>,
    <div>
      <p>
        Ofrece tus productos a todo el mundo.
        <br />
        Con una tienda online podrás multiplicar tus ventas y aumentar tu
        clientela.
        <br />
      </p>
      <p>Una tienda online se suele componer de:</p>
      <ul>
        <li>
          Una página principal que muestre tus mejores productos y tus ventajas.
        </li>
        <li>Catálogo completo de los productos que ofreces.</li>
        <li>Una sección de presentación que dé a conocer tu empresa.</li>
        <li>Solicitudes de contacto, presupuestos y asistencia.</li>
        <li>Distintos métodos de envío y pago.</li>
        <li>Precio aproximado: A partir de 400€.</li>
      </ul>
    </div>,
  ]);
  const [show, setShow] = useState(false);
  function overlay() {
    setShow(!show);
  }
  return (
    <section id="disenos" class="sec2 anim">
      <div class="wrap-sec2">
        <div class="quebuscas">
          <h2>Dinos qué estás buscando</h2>
          <span>Nosotros nos encargamos de hacer realidad tu idea.</span>
        </div>
        <div class="cards">
          {tipos.map((tipo, i) => {
            return (
              <CardComponent
                key={tipo}
                tipo={tipo}
                info={info[i]}
                details={details[i]}
                onhandleClick={overlay}
                //show={show}
              />
            );
          })}
        </div>
      </div>
      <div id="anchor-fix" />
    </section>
  );
}
