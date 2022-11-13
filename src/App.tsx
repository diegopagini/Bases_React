/** @format */
import { Counter } from './bases/components/Counter';
import { CounterBy } from './bases/components/CounterBy';
import { CounterEffect } from './bases/components/CounterEffect';
import { CounterHook } from './bases/components/CounterHook';

function App() {
	return (
		<>
			<Counter initialValue={10} />
			<CounterBy />
			<CounterEffect />
			<CounterHook />
		</>
	);
}

export default App;
