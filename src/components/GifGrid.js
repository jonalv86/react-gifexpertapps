// import { useState, useEffect } from "react";
// import { getGifts } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    // const [count, setCount] = useState(0);
    const { data: images, loading } = useFetchGifs(category);

    // Ejecuta esta instrucción cuando el código es llamado por primera vez
    // const [images, setImages] = useState([]);
    
    // useEffect(() => {
    //     getGifts(category)
    //         // .then(imgs => setImages(imgs));
    //         .then(setImages); // El primer argumento lo usa automáticamente
    // }, [ category ]);

    // getGifts();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            // Manda las propiedades como props independientes
                            { ...img }  
                        />
                    ))
                }
            </div>
            {/* { loading ? 'Cargando...' : 'Data cargada' } */}
            {/* <div className="card-grid">
                {/* <h3>{category}</h3> */}
                {/* <h3>{count}</h3>
                <button onClick={ () => setCount(count + 1) }></button> */}
                {/* <ol> */}
                    {/* <li>item</li> */}
                    {/* {
                        images.map(({id, title}) => (
                            <li key={id}>{title}</li>
                        ))
                    } */}
                {/* </ol> * /}
                {
                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            // Manda las propiedades como props independientes
                            { ...img }  
                        />
                    ))
                }
            </div> */}
        </>
    )
}
