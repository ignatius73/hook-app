import React, { useState } from 'react';
import { MultipleCustomHooks } from '../samples/MultipleCustomHooks';
import '../02-useEffect/SimpleForm.css';


export const RealExampleRef = () => {



    const [show, setshow] = useState(false);

    const handleClick = () =>{
        setshow( !show );
    }

    
    return (
        <div>
            <h1>RealExampleRef</h1>

           

            <button className="btn btn-outline-success"
                    onClick={ handleClick }>Muestra MultipleCustomHooks</button>

                 { show && <MultipleCustomHooks />}
        </div>
    )
}
