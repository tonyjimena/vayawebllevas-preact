import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import {getCookie, setCookie} from '../../helpers'

export default function PolicyPrivacy() {
  
  const [show, setShow] = useState(false);
  const [Class, setClass] = useState('fadeInUp');

  useEffect(() => {
    if (getCookie('vaya-rgpd-pop') == '') {
      setTimeout(() => {
        setShow(true);
      }, 3000);
      setTimeout(() => {
        setClass('fadeOutDown')
      }, 7000);
      setTimeout(() => {
        setShow(false);
      }, 7500);
		}
  }, []);

  function handleClick(e) {
    // e.preventDefault()
    setCookie('vaya-rgpd-pop', 'popped', 30)
    setClass('fadeOutDown')
    setTimeout(() => {
      setShow(false);
    }, 450);
  }

  return (
    <>
      {show ? (
        <>
        <div id="vaya-rgpd-pop" className={`rgpd-notif ${Class}`}>
          <p>
            Si sigues por aquí, asumimos que aceptas nuestra
            <span>puñetera</span> política de privacidad y cookies
          </p>
          <a onClick={handleClick} href="" class="popup-close" rel="nofollow">
            <i class="material-icons"> close </i>
          </a>
        </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
