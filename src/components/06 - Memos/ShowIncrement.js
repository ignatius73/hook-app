import React from 'react'

export const ShowIncrement = React.memo(( {increment} ) => {
    return (
        <div>
             <button className="btn btn-primary"
                    //Esta función incrementerá por 5 al contador  
                    onClick={ ()=> { increment(5) }}>+1</button>
        </div>
    )
})
