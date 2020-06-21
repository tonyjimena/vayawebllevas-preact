import {h} from 'preact';

import Formulario from '../form';

export default function ContactSection () {
    return (
        <section id="dimealgo" class="sec3">
				<div class="contasto">
					<h2>Queremos trabajar contigo</h2>
					<p>
						Te mandaremos tu presupuesto a medida en menos de 1 día.<br /><strong
							>Sin compromiso.</strong
						>
					</p>
				</div>
				<div class="form-lololo">
					<Formulario />
				</div>
			</section>
    );
}
 