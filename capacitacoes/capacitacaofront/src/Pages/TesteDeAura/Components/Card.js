import React from 'react'

import '../TesteDeAura.css'

export default function Card(props){
    return(
        <div className='Card'>
            <div className='CardQuestion'>
                {props.question.question}
            </div>
            <div className='CardOptions'>
                {
                    props.question.options.map(option=>{
                        return (
                            <div>
                                <input type='radio' name={props.question.tag} value={option} id={option}/>
                                <label for={option}>{option}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}