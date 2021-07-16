import { React, useEffect, useState } from "react"


export const Message = () => {

    const [coords, setcoords] = useState({ x:0, y:0});


    const { x, y } = coords;

    

    useEffect(() => {
        console.log('Componente montado');
        const mouseMove = (e) => {
            const coords = { x: e.x,
                             y: e.y
                            };
            //console.log(e.x, e.y);
            setcoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log('Componente desmontado');
        }
    }, [])

    return (
        <div>
            <p>Eres genial!!!</p>
            <h4>x { x } y { y } </h4>
        </div>
    )
}
