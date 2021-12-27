import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";
export const useFetchGifs = (category)=>{
    const [state, setState] = useState({
        data:[],
        loading: true,
    });

    useEffect(() => {
        getGifs(category)
            .then(img => 
                setTimeout(()=>{
                    setState({
                        data: img,
                        loading: false
                    })
                },300))
            .catch(e => console.error("Nuevo Error: "+ e))
    }, [category]);

    
    return state;
}