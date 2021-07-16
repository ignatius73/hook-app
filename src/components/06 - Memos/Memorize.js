import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/SimpleForm.css';
import { Small } from './Small';

export const Memorize = () => {

    const { state:contador, increment } = useCounter(10);
    const [show, setshow] = useState(true);
       
    
    return (
        <div>
            <h1>Memorize</h1>
            <h3><Small value={contador} /></h3>
            
            <button className="btn btn-primary boton" 
                    onClick={ () => increment() }>+1
            </button>
            
            <button className="btn btn-outline-primary boton"
                    onClick={ () => {setshow(!show)}}>Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
