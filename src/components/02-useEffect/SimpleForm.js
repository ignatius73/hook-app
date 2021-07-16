import { React,useEffect, useState }from 'react';
import { Message } from './Message';
import './SimpleForm.css';



export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email:''
    })

    const { name, email } = formState;

 

    useEffect( ( name ) =>{
        // console.log('Hey!');
    },[]);
    // UseEffect esperando cambios en formState
    useEffect( ( name ) =>{
        // console.log('Cambió el Form!');
    },[formState]);
    //Desestructuro el objeto event
    const handleInputChange = ({ target }) => {
        // Llamo al setFormState
        setformState({
            ...formState,
            // Target.name entre corchetes para desestructurar el nombre del objeto
            [ target.name ] : target.value
        })
    }

    return (
        <div className="container">
            <h1>UseEffect</h1>

            <hr/>

            <div className="form-group">
                
                    <input  type="text"
                            value={ name } 
                            name="name" 
                            className="form-control" 
                            placeholder="Name" 
                            autoComplete="off" 
                            onChange={ handleInputChange }/>
            </div>
            <div className="form-group">
                    <input type="email" 
                           value={ email } 
                           name="email" 
                           className="form-control" 
                           placeholder="Email" 
                           autoComplete="off" 
                           onChange={ handleInputChange }/>


           

             
                

                

            </div>

            { ( name === '123') && <Message /> }
        </div>
    )
}
