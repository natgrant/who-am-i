import React from 'react'   
export default function Description (props) {
        return (
            <div className = "description">
                <h2>Character</h2>
                <h3>Name:{props.name}</h3>
                <h3>Occupation:{props.occupation}</h3>
                <h3>Hobby:{props.hobby}</h3>
            </div>

        )
         
    }

    

