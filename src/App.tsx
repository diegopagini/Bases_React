/** @format */
import { Counter, CounterBy, CounterEffect, CounterHook } from './bases/components';
import { CounterReducer } from './counter-reducer/CounterReducer';

function App() {
	return (
		<>
			<Counter initialValue={10} />
			<CounterBy />
			<CounterEffect />
			<CounterHook />
			<CounterReducer />
		</>
	);
}

export default App;
