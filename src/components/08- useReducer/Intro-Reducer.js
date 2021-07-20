console.log('Hola mundo');

const initialState = [{
    id: 1,
    todo: 'Comprar el pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const newTodo = [{
    id: 2,
    todo: 'Comprar leche',
    done: false
}];

const action = {
    // Tipo de acción
    type: 'agregar',
    // Se puede enviar el objeto directamente pero es una convención usar payload
    payload: newTodo
};



todos = todoReducer(todos, action);
console.log(todos)