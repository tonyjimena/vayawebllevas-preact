import { h } from "preact";
import { useState } from "preact/hooks";
import CardDetails from "../cardDetails";
import { capitalize } from "../../helpers/";

export default function CardComponent({ tipo, info, details, onhandleClick }) {
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(!showDetails);
    onhandleClick();
  };
  //console.log(tipo.split(' ')[0])
  return (
    <>
      <div onClick={handleClick} class={`card card-${tipo.split(' ')[0]}`}>
        <div class="eeehhh">
          <h3>
            <span class="card-quiero">
              {tipo == "blog"
                ? "Quiero un"
                : tipo == "tienda online"
                ? "Quiero una"
                : "Quiero una web"}
            </span>
            <br />
            <span class="card-web">{capitalize(tipo)}</span>
            <i class="material-icons card-icon">keyboard_arrow_right</i>
          </h3>
          <p class="card-desc">{info}</p>
        </div>
      </div>
      {showDetails ? (
        <CardDetails
          onhandleClick={handleClick}
          tipo={tipo}
          details={details}
        />
      ) : (
        ""
      )}
    </>
  );
}
