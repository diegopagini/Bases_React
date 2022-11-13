/** @format */
import { FC, useState } from 'react';

interface Props {
	initialValue?: number; // ? para hacerlo opcional.
}

export const CounterBy: FC<Props> = ({ initialValue = 0 }) => {
	// Desestructuración de las props.
	const [counterState, setCounterState] = useState({
		counter: initialValue,
		clicks: 0,
	}); // useState puede aceptar objetos para mantener el estado.

	const { counter, clicks } = counterState; // Para utilizarlos en la vista.

	/**
	 * Función para aumentar el valor del counter.
	 */
	const handleClick = (value: number) => {
		setCounterState((prev) => ({ counter: prev.counter + value, clicks: prev.clicks++ }));
		// Siempre se debe retornar un nuevo estado.
	};

	return (
		<>
			<h1>CounterBy: {counter}</h1>
			<h2>Clicks: {clicks}</h2>

			<button onClick={() => handleClick(1)}>+1</button>
			<button onClick={() => handleClick(5)}>+5</button>
		</>
	);
};
