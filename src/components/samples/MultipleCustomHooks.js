import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/SimpleForm.css';


export const MultipleCustomHooks = () => {

    const {state:id, increment } = useCounter(1);

    const baseUrl = `https://www.breakingbadapi.com/api/quotes/${ id }`;

    const { loading, data } = useFetch( (baseUrl) );
       
    const { author, quote } = !!data && data[0];

   

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading
                ?
                (
                  <div className="alert alert-info text-center">
                      Loading...
                  </div>  
                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer mt-1">{author}</footer>
                    </blockquote>
                )
            }
            
           
            
            <hr/>
            
            
            <button type="submit" onClick={ () => increment()}>Siguiente Frase</button>
           
        </div>
    )
}
