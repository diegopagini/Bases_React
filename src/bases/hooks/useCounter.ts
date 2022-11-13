/** @format */
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

export const useCounter = (max = 0) => {
	const [counter, setCounter] = useState(0);
	const counterElement = useRef<HTMLHeadingElement>(null);

	const handleClick = () => {
		setCounter((prev: number) => Math.min(prev + 1, max));
	};

	useEffect(() => {
		if (counter < max) return;

		const timeLine = gsap.timeline();
		timeLine
			.to(counterElement.current, { y: -10, duration: 0.25, ease: 'ease.out' })
			.to(counterElement.current, {
				y: 0,
				duration: 1,
				ease: 'bounce.out',
			});
	}, [counter, max]);

	return {
		counter,
		counterElement,
		handleClick,
	};
};
