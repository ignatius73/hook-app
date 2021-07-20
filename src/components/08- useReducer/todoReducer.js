
export const todoReducer = ( state = [], action ) =>{
    
    switch (action.type) {

        case 'add':
            return [...state, action.payload];
        case 'delete':
            console.log('entro al case correcto');
            return state.filter( todo => todo.id !== action.payload);
        case 'toggle':
            // Modo ternario
            return state.map( (todo) =>(
                ( todo.id === action.payload)
                    ? {...todo, done: !todo.done}
                    : todo
               ));
        case 'toggle-old':
            return state.map( (todo) =>{
                if(todo.id === action.payload ){
                    todo.done = !todo.done;
                    
                }
                
                return(todo);
            });
        
    
        default:
            return state;
            
    };

}