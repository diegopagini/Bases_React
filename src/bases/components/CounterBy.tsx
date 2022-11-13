/** @format */
import { FC, useState } from 'react';

interface Props {
	initialValue?: number; // ? para hacerlo opcional.
}

// Interfaz para el useState
interface CounterState {
	counter: number;
	clicks: number;
}

export const CounterBy: FC<Props> = ({ initialValue = 0 }) => {
	// Desestructuración de las props.
	const [counterState, setCounterState] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	}); // useState puede aceptar objetos para mantener el estado.

	const { counter, clicks } = counterState; // Para utilizarlos en la vista.

	/**
	 * Función para aumentar el valor del counter.
	 */
	const handleClick = (value: number) => {
		setCounterState(({ clicks, counter }) => ({ counter: counter + value, clicks: clicks + 1 })); // No se puede hacer clicks++, porque es una constante
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
