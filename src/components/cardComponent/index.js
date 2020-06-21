import { h } from "preact";
import { useState } from "preact/hooks";
import CardDetails from "../cardDetails";

export default function CardComponent({
  tipo,
  info,
  details,
  onhandleClick,
  //show,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(!showDetails);
    onhandleClick();
  };

  return (
    <>
      <div onClick={handleClick} class={`card card-${tipo}`}>
        <div class="eeehhh">
          <h3>
            <span class="card-quiero">Quiero una web</span>
            <br />
            <span class="card-web">{tipo}</span>
            <i class="material-icons card-icon">keyboard_arrow_right</i>
          </h3>
          <p class="card-desc">{info}</p>
        </div>
      </div>
      {showDetails ? <CardDetails onhandleClick={handleClick}tipo={tipo} details={details} /> : ""}
    </>
  );
}
