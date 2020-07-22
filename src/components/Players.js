import React from 'react'

export default function Player (props) {
    const { details } = props
    
    if(!details){
        return <h3>not good enough</h3>
    }
    
    return (  
        <div className='card'>
            <h2>Name: {details.name}</h2>
            <p>Jersey Number: {details.number}</p>
            <p>Position: {details.position}</p>
        </div>
    )
}