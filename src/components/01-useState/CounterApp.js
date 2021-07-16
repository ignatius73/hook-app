import React from 'react';
import { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setstate] = useState({
        counter1:10,
        counter2:20});

    const { counter1, counter2 } = state;
    return (
        <>
          <p>Counter { counter1 }</p>
          <p>Counter { counter2 }</p>
          <button onClick={ () => setstate({...state, counter1:counter1+1})} className="btn btn-primary">Sumar counter 1</button>
          <button onClick={ () => setstate({...state, counter2:counter2+1})} className="btn btn-secondary">Suma Counter 2</button>
        </>
    )
}
