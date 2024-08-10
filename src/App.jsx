import { useReducer } from "react";

export default function App() {
	const [op, dispatch] = useReducer(reducer, 0)

	function reducer(state, action) {
		switch (action.type) {
			case "+":
				return state + action.payload;
			default:
				return state;
		}
	}
	return (<>
		<h1>{`the count is ${op} `}</h1>
		<button onClick={() => dispatch({ type: "+", payload: 1 })}>+</button>
	</>);
}

