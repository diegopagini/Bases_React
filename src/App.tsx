/** @format */
import { Counter } from './bases/components/Counter';
import { CounterBy } from './bases/components/CounterBy';
import { CounterEffect } from './bases/components/CounterEffect';

function App() {
	return (
		<>
			<Counter initialValue={10} />
			<CounterBy />
			<CounterEffect />
		</>
	);
}

export default App;
