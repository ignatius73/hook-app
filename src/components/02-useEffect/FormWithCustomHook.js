import { React,useEffect }from 'react';
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';
import './SimpleForm.css';



export const FormWithCustomHook = () => {

   

    const [formValues, handleInputChange] = useForm({
        name: '',
        email:'',
        password:''
    });

    
    const { name, email, password } = formValues;

    useEffect( ( name ) =>{
        // console.log('Hey!');
    },[]);
    // UseEffect esperando cambios en formState
    useEffect( ( name ) =>{
        // console.log('Cambió el Form!');
    },[formValues]);
    //Desestructuro el objeto event

    const handleSubmit = ( e ) =>{
        e.preventDefault();

        console.log(formValues);
    }
    

    return (
        <div className="container">

            <h1>Form With Custom Hook</h1>

            <hr/>
            <form onSubmit={ handleSubmit } className="formulario">
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
                            placeholder="email" 
                            autoComplete="off" 
                            onChange={ handleInputChange }/>
                </div>
                <div className="form-group">
                        <input type="password" 
                            value={ password } 
                            name="password" 
                            className="form-control" 
                            placeholder="*****" 
                            onChange={ handleInputChange }/>
                </div>
                
                <button type="submit" className="btn btn-primary boton">Guardar</button>
                
            </form>

            { ( name === '123') && <Message /> }
        </div>
    )
}
