import React from 'react'

const style={
    QuestionCard: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
        width: '250px',
        height: '250px',
        borderRadius: '15px',
        backgroundColor: '#B064C6',
        color: '#ffff',
        fontSize: '150%',
        padding: '10px'
    },
    questionTitle: {
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '600'
    },
    optionsContainer: {
        marginTop: '20px'
    }
}

export default function QuestionsCard(props){
    return(
        <div style={style.QuestionCard}>
            <div style={style.questionTitle}>{props.question.question}</div>
            <div style={style.optionsContainer}>
                {props.question.options.map((value)=>{
                    return (
                        <div>
                            <input type='radio' name={props.question.tag} style={style.option} value={value} id={value}/>
                            <label for={value}>{value}</label>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}