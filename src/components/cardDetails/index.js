import { h } from "preact";
import {useState} from 'preact/hooks';
import {capitalize} from '../../helpers/'

export default function CardDetails({tipo, details, onhandleClick}) {
  const [fade, setFade] = useState('fadeIn')
  function handleClick() {
    setFade('fadeOut')
    setTimeout(() => {
      onhandleClick()
    }, 250)
  }
  return (
    <>
    <div onClick={handleClick} class={`${fade} overlay-to-wapo visible`} />
    <div class={`webpop ${fade} visible ${tipo.split(' ')[0]}`}>
        <p class="h3">
          {capitalize(tipo)}
        </p>
        {details}
        <i onClick={handleClick} class="material-icons xauu"> close </i>
        <a onClick={handleClick} href="#dimealgo" class="butt butt-main">
          Me interesa
        </a>
    </div>
    </>
  );
}
