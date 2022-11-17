/** @format */
import { CounterAction } from '../actions/counter.actions';
import { CounterState } from '../interfaces/counter.interfaces';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
	switch (action.type) {
		case 'increaseBy':
			return {
				changes: state.changes + 1,
				counter: state.counter + action.payload.value,
				previous: state.counter,
			};

		case 'reset':
			return {
				changes: 0,
				counter: 0,
				previous: 0,
			};

		default:
			return state;
	}
};
