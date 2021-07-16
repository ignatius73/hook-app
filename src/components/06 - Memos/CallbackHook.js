import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/SimpleForm.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setcounter] = useState(0);

    const increment = () =>{
        setcounter(counter + 1);
    }

    useCallback(
         (num) => {
            // No se debe hacer referencia al nombre del state, si no darle un valor distinto
            setcounter( c => c + num);
        },
        [setcounter]
    );

    return (
        <div>
            <h1>UseCallbackHook</h1>
            <hr/>
            <h2>Counter: { counter }</h2>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
