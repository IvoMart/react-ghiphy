import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories';
import { GifGrilla } from './components/GifGrilla';

export const GifExpertApp = ()=> {
    // const categories = ['One', 'Dragon Ball', 'Samurai']
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = ()=>{
    //     setCategories(categ => [...categ, 'Otra Categoria'])
    // }
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategories setCategories={setCategories}/>
            <hr />

            <div>
                {
                    categories.map((category) =>
                        <GifGrilla key={category} category={category} />
                    )
                }
            </div>
        </>
    )
}

