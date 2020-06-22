import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function PolicyPrivacy() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 3000);
  }, []);
  return (
    <>
      {show ? (
        <div id="vaya-rgpd-pop" class="rgpd-notif fadeInUp">
          <p>
            Si sigues por aquí, asumimos que aceptas nuestra
            <span>puñetera</span> política de privacidad y cookies
          </p>
          <a href="" class="popup-close" rel="nofollow">
            <i class="material-icons"> close </i>
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
