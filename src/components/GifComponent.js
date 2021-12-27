import React from 'react'

export const GifComponent = ({title, url}) => {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={url} alt={title}/>
        </div>
    )
}
