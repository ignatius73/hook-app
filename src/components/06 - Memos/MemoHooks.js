import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/SimpleForm.css';
import { procesoPesado }  from '../../helpers/ProcesoPesado';


export const MemoHooks = () => {

    const { state:contador, increment } = useCounter(5000);
    const [show, setshow] = useState(true);
    const memoPesado = useMemo(() => procesoPesado(contador), [contador]);
       
    
    return (
        <div>
            <h1>MemoHooks</h1>
            <h3>Counter: <small>{ contador }</small></h3>

            <h2>{ memoPesado }</h2>
            
            <button className="btn btn-primary boton" 
                    onClick={ () =>  { increment()}}>+1
            </button>


            
            <button className="btn btn-outline-primary boton"
                    onClick={ () => {setshow(!show)}}>Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
