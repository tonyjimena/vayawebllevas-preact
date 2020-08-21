import { h } from "preact";
import { useState } from "preact/hooks";
import {tipos, info, details} from '../../context/'

import CardComponent from "../cardComponent";

export default function CardsSection() {
  
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
              />
            );
          })}
        </div>
      </div>
      <div id="anchor-fix" />
    </section>
  );
}
