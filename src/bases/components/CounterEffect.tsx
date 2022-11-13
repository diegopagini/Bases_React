/** @format */
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = ({ initialValue = 0 }) => {
	const [counter, setCounter] = useState(initialValue);
	const counterElement = useRef<HTMLHeadingElement>(null); // Como parámetro va la inicializacion. El generic hace referencia al elemento HTML

	useEffect(() => {
		// Cuando el componente se contruye se dispara el cuerpo del useEffect.
		console.log('useEffect');
		if (counter < MAXIMUN_COUNT) return;

		console.log('%cSe alcanzó el valor máximo.', 'color: red; background-color: black'); // Con %c al principicio del string y luego las propiedades de css se puede estilizar la consola

		/**
		 * Animación:
		 * Mala práctica usar un selector de clase. Es necesario useRef.
		 * .current apunta al nodo. counterElement es el resultado de useRef.
		 */
		const timeLine = gsap.timeline();
		timeLine
			.to(counterElement.current, { y: -10, duration: 0.25, ease: 'ease.out' })
			.to(counterElement.current, {
				y: 0,
				duration: 1,
				ease: 'bounce.out',
			});
	}, [counter]); // El arreglo de dependencias que vuelven a activar el useEffect.

	const handleClick = () => {
		// setCounter((prev: number) => (prev >= MAXIMUN_COUNT ? prev : prev + 1));
		setCounter((prev: number) => Math.min(prev + 1, MAXIMUN_COUNT)); // Math.min retorna el valor, en este caso el valor previo o la constante MAXIMUN_COUNT
	};

	return (
		<>
			<h1>CounterEffect:</h1>
			{/* Ref para poder manipular del elemento con useRef */}
			<h2 ref={counterElement}>{counter}</h2>

			<button onClick={handleClick}>+1</button>
		</>
	);
};
