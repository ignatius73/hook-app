import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    //Obtener Referencia al Context
    const { setuser } = useContext(UserContext);

    const usuario = {
        id: 1,
        name: 'Gabriel',
        email: 'ghgarciar@gmail.com'
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary" onClick={ () => setuser( usuario ) }>Establecer</button>
        </div>
    )
}
