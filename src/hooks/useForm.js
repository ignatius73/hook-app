import { useState } from "react";

export const useForm = ( initialState = {} ) => {
   
    const [values, setvalues] = useState(initialState);

    // Recibe el objeto de evento desestrucuturado
    const handleInputChange = ( ( { target} ) =>{

        setvalues({
            ...values,
            [ target.name ] : target.value
        })
    })
    return [ values, handleInputChange ];
}