/** @format */

export type CounterAction =
	| {
			type: 'increaseBy';
			payload: { value: number };
	  }
	| {
			type: 'reset';
	  };
