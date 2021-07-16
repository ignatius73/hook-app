import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './Layout.css';

import '../02-useEffect/SimpleForm.css';


export const LayoutEffect = () => {

    const {state:id, increment } = useCounter(1);
    const baseUrl = `https://www.breakingbadapi.com/api/quotes/${ id }`;
    const { loading, data } = useFetch( (baseUrl) );
    const { author, quote } = !!data && data[0];
    const pTag = useRef();

    useLayoutEffect(() => {
       console.log(pTag.current.getBoundingClientRect());
    }, [quote]);

    
    

   

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            
                    <blockquote className="blockquote text-right">
                        <p className="mb-1"
                            ref={ pTag }>{quote}</p>
                        <footer className="blockquote-footer mt-1">{author}</footer>
                    </blockquote>
        
           
            
            <hr/>
            
            
            <button type="submit" onClick={ () => increment()}>Siguiente Frase</button>
           
        </div>
    )
}
