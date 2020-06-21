import { h } from "preact";
import {useState} from 'preact/hooks'
export default function CardDetails({tipo, details, onhandleClick}) {
  const [fade, setFade] = useState('fadeIn')
  function handleClick() {
    setFade('fadeOut')
    setTimeout(() => {
      onhandleClick()

    }, 500)
  }
  return (
    <>
    <div onClick={handleClick} class={`${fade} overlay-to-wapo visible`} />
    <div class={`webpop ${fade} visible ${tipo}`}>
      <p class="h3">{tipo}</p>
      {details}
      <i onClick={handleClick} class="material-icons xauu"> close </i>
      <a onClick={handleClick} href="#dimealgo" class="butt butt-main">
        Me interesa
      </a>
    </div>
    </>
  );
}
