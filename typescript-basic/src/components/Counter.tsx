import React, { useReducer } from "react";

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unvailable action');
    }
}



const Counter = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <div>
                <h1>{count}</h1>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
                <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
            </div>
        </>
    )
}

export default Counter;