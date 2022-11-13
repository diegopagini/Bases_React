/** @format */
import { Counter } from './bases/components/Counter';
import { CounterBy } from './bases/components/CounterBy';

function App() {
	return (
		<>
			<Counter initialValue={10} />
			<CounterBy />
		</>
	);
}

export default App;
