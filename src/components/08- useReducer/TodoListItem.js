import React from 'react'

export const TodoListItem = ({todo, i, handleDelete, handleToggle}) => {
    return (
        <li className="list-group-item" 
        key={todo.id }>
            <p onClick={ () => handleToggle(todo.id) } className={ `text-center ${ todo.done && 'complete'}`} >{ i + 1} { todo.descripcion }</p>
            <button name="borrar" onClick={ () => handleDelete( todo.id) } className="btn btn-danger">Borrar</button>
    </li>
    )
}
