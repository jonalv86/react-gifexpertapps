import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (e) => {
    //     // setCategories([...categories, 'Saint Seiya']);
    //     setCategories(cats => [...cats, 'Saint Seiya']);
    // };

    return(
        <>
            <h2>GitExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr />

            {/* <button onClick={ () => handleAdd() }>Agregar</button> */}

            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
}
