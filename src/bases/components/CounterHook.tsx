/** @format */
import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
	const { counter, counterElement, handleClick } = useCounter(10);

	return (
		<>
			<h1>CounterHook:</h1>
			<h2 ref={counterElement}>{counter}</h2>

			<button onClick={handleClick}>+1</button>
		</>
	);
};
