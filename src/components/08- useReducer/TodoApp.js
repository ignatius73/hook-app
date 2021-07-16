import React, { useReducer } from 'react';

const initialState = [{
    id: new Date().getDate(),
    descripcion: 'Aprender React',
    done: false 
}];


export const TodoApp = () => {

    const [state] = useReducer(reducer, initialState, init);
    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ol>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Adión</li>
            </ol>
        </div>
    )
}
