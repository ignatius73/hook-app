import { useState } from "react"


export const useCounter = (initState = 10) => {

    const [state, setstate] = useState(initState);

    const increment = (factor = 1) => {

        setstate(state + factor);

    };

    const decrement = (factor = 1) => {
        setstate(state - factor);
    }

    const reset = () => {
        setstate(initState);
    }

    // Devuelvo objeto con todas las funciones del hook
    return {
        state,
        increment,
        decrement,
        reset
    };
}