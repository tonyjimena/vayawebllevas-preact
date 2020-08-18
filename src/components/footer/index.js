import { h } from "preact";
import "./style.css";

export default function Footer() {
  return (
    <footer>
			<div class="footer1">
				<div class="foot-wrap">
					<div class="logo-footer">
						<img
							alt="¡Qué ha pachado!"
							src="./assets/img-compress/xdddd.png"
							class="logo-vwl"
							height="88"
							width="200"
						/>
					</div>
					<div class="foot-text1">
						<p class="quequequeremos">
							<strong>Queremos ofrecerte lo mejor</strong>
						</p>
						<p>Por eso hemos creado <span class="heyy">VayaWebLlevas</span>.</p>
					</div>
					<div class="foot-text2">
						<p>
							Nuestro objetivo es conseguir que mejores tu presencia en
							internet, y estamos deseando conseguirlo.
						</p>
					</div>
					<div class="foot-text">
						<p>
							<a target="_blank" href="tel:+34608018589">
								<i class="material-icons"> phone </i> 608 01 85 89
							</a>
						</p>
						<p>
							<a
								href="mailto:info@vayawebllevas.com?subject=Necesito%20una%20web!&amp;body=%C2%A1Hola!%20Querr%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios"
								title="Contacta por Correo Electrónico"
								><i class="material-icons"> mail </i> info@vayawebllevas.com</a
							>
						</p>
					</div>
				</div>
			</div>
			<div class="footer2">
				<div class="foot-wrap2">
					<div class="foot-text">
						<p>
							Nature does not hurry, <br />
							yet everything is accomplished.
						</p>
						<div class="luv">
							<span>
								Made with <i class="material-icons"> favorite </i> in Séptimo
								Miau. <br />Copyright © 2020
							</span>
						</div>
					</div>
					<div class="social">
						<a
							target="_blank"
							href="https://api.whatsapp.com/send?phone=34608018589&amp;text=Hola%21%20Necesito%20una%20web%20r%C3%A1pida%20y%20barata%21"
						>
							<img
								alt="¡Contacta por whatsapp!"
								title="Contacta por WhatsApp"
								src="./assets/img-compress/whatsapp-vaya-web-llevas.png"
								class="wh-vwl"
								height="75"
								width="75"
							/>
						</a>
						<a target="_blank" href="tel:+34608018589">
							<img
								alt="¡Contacta por teléfono!"
								title="Contacta por Teléfono"
								src="./assets/img-compress/telefono-vaya-web-llevas.png"
								class="wh-vwl"
								height="75"
								width="75"
							/>
						</a>
						<a
							target="_blank"
							href="mailto:info@vayawebllevas.com?subject=Necesito%20una%20web!&amp;body=%C2%A1Hola!%20Querr%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios"
						>
							<img
								alt="¡Contacta por correo!"
								title="Contacta por Correo Electrónico"
								src="./assets/img-compress/correo-vaya-web-llevas.png"
								class="wh-vwl"
								height="75"
								width="75"
							/>
						</a>
					</div>
				</div>
			</div>
		<div class="seperator-wrapper"><div class="seperator gradient"></div></div>
		</footer>
  );
}
