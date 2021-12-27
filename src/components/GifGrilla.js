import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/UseFetchHooks';
import { GifComponent } from './GifComponent';

export const GifGrilla = ({category}) => {
    const { data:images, loading } = useFetchGifs(category);
    

    return (
        <>
            <h3>{category}</h3>
            {loading && <h2>Cargando..</h2>}
            <div className="card-grid">
                    {images.map((img)=>(<GifComponent key={img.id} {...img}/>))
                    }
            </div>
        </>
    )
}
