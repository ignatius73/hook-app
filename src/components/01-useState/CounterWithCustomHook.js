import React from 'react'

import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {
        state: counter,
        increment,
        decrement,
        reset
    } = useCounter(10);

    // const [state, setstate] = useState(0);
    return ( <
        >
        <
        h1 > Counter { counter } < /h1>

        <
        button className = "btn btn-primary"
        onClick = {
            () => increment(2)
        } > Suma 1 < /button>

        <
        button className = "btn btn-secondary"
        onClick = {
            () => decrement(2)
        } > Resta 1 < /button>

        <
        button className = "btn btn-danger"
        onClick = {
            () => reset()
        } > Reset < /button>

        <
        / >
    )
}