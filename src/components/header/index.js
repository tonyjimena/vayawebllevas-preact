import { h } from "preact";
import { useState, useLayoutEffect } from "preact/hooks";
//import style from './style.css';

export default function Header() {
  const [position, setPosition] = useState();
  const [show, setShow] = useState();
  const [fade, setFade] = useState("fadeIn");

  function updatePosition() {
    setPosition(window.pageYOffset);
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", updatePosition);
    //updatePosition();

    if (position > 500) {
      fade == "fadeOut" ? setFade("fadeIn") : "";
      setTimeout(() => {
        setShow(true);
      }, 500);
    } else {
      fade == "fadeIn" ? setFade("fadeOut") : "";
      setTimeout(() => {
        setShow(false);
      }, 500);
    }
    //console.log(position)
  }, [position, show, fade]);

  return (
    <header class="wrappa">
      <a class="logo-ayy" href=".">
        <vayavaya class="logo">
          <img
            alt="¡Qué ha pachado!"
            src="./assets/img/xdddd.png"
            class="logo-vwl"
            height="88"
            width="200"
          />
        </vayavaya>
      </a>
      {show ? (
        <a href="#dimealgo" class={`${fade} butt butt-main`}>
          Presupuesto hoy mismo
        </a>
      ) : (
        ""
      )}
    </header>
  );
}
