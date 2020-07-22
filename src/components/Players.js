import React from 'react'

export default function Player (props) {
    const { details } = props
    
    if(!details){
        return <h3>not good enough</h3>
    }
    
    return (  
        <div>
            <h2>{details.name}</h2>
            <p>{details.number}</p>
            <p>{details.position}</p>
        </div>
    )
}