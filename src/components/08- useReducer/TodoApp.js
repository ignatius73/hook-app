import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';
import './styles.css';
import { TodoList } from './TodoList';



// Retorna del localstorage el arreglo de To Do, o un arreglo vacío
const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}



export const TodoApp = () => {

    const [todos, dispatch ] = useReducer(todoReducer, [], init);
    
    const [ { description }, handelInputChange, reset ] = useForm( { description: ''});

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        
    }, [todos]);


    const handleSubmit = ( e ) =>{
        e.preventDefault();

        if ( description.trim().length <=1){
            return;
        }
       
        const newTodo = {
            id: new Date().getMilliseconds(),
            descripcion: description,
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo
        };
    
        dispatch(action);

        reset();

       

    }

    const handleDelete = ( todoId )=>{
        
        const action = {
            type: 'delete',
            payload: todoId

    };
    dispatch(action);

}

    const handleToggle = ( todoId ) =>{
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action);
    }
    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr/>
            <div className="row">
                <div className="col-7" >
                        <TodoList todos= { todos }
                                  handleDelete={ handleDelete }
                                  handleToggle={ handleToggle } />
                 </div>
                <div className='col-5'>
                    <h4>Agregar To Do</h4>
                    <form className="formulario" onSubmit={ handleSubmit }>
                        <input  type="text" 
                                name="description" 
                                placeholder="Aprender..." 
                                autoComplete="off"
                                className="form-control"
                                onChange={ handelInputChange }
                                value={ description }>
                        </input>
                        <button type="submit" className="btn btn-success from-control" >Agregar</button>
                        </form></div>
            </div>

            
            
 
            
            
            
        </div>
    )
}
