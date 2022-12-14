/** @format */
import { FC, useState } from 'react';

interface Props {
	initialValue?: number; // ? para hacerlo opcional.
}

export const Counter: FC<Props> = ({ initialValue = 0 }) => {
	// Desestructuración de las props.
	const [counter, setCounter] = useState(initialValue);

	/**
	 * Función para aumentar el valor del counter.
	 */
	const handleClick = () => {
		setCounter((prev: number) => prev + 1); // No es posible hacer counter++, porque es una constante.
		// Siempre se debe retornar un nuevo estado.
	};

	return (
		<>
			<h1>Counter: {counter}</h1>
			<button onClick={handleClick}>+1</button>
		</>
	);
};
