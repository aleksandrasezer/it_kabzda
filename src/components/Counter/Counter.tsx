import React, {useReducer} from "react";

type StateType = {count: number}
type ActionType = {type: 'decrement' | 'increment'}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch(action.type) {
        case 'decrement':
            return {count: state.count - 1};
        case 'increment':
            return {count: state.count + 1};
        default:
            return state
    }
}

export function Counter() {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment'})}> + </button>
            <button onClick={() => dispatch({type: 'decrement'})}> - </button>
        </div>
    )
}