import React from "react"
import { useAppDispatch, useCounterValue } from "../util/store"
import { increment, decrement, reset } from "../reducers/example-counter-reducer"

const CounterComponent = () => {
	const dispatch = useAppDispatch()
	const counterValue = useCounterValue()

	return (
		<div className="flex flex-col gap-4 justify-start items-start">
			<h1>Counter: {counterValue}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	)
}

export default CounterComponent
