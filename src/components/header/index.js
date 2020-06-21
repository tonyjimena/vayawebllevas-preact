import { h } from 'preact';
//import { useState, useEffect } from 'preact/hooks';
//import style from './style.css';

export default function Header() {
	// const [scroll, setScroll] = useState(window.scrollY)
	// useEffect(() => {
	// 	setScroll(window.scrollY)
	// 	console.log(window.scrollY)
	// }, [window.scrollY])

	return (
	<header class="wrappa">
			<a class="logo-ayy" href="."
				><vayavaya class="logo"
					><img
						alt="¡Qué ha pachado!"
						src="../../assets/img/xdddd.png"
						class="logo-vwl"
						height="88"
						width="200" /></vayavaya
			></a>
			<a href="#dimealgo" class="butt butt-main">Presupuesto hoy mismo</a>
		</header>
		)
}
