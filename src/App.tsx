/** @format */
import { Counter, CounterBy, CounterEffect, CounterHook, CounterReducerComponent } from './bases/components';

function App() {
	return (
		<>
			<Counter initialValue={10} />
			<CounterBy />
			<CounterEffect />
			<CounterHook />
			<CounterReducerComponent />
		</>
	);
}

export default App;
