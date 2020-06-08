import React, {useState} from 'react'

import Header from './Header'
import QuestionCard from './QuestionCard'
import './Pronto.css'

const questions = [
    {
        tag: 'animal',
        question: 'Qual animal você mais se identifica?',
        options: ['Águia', 'Leão', 'Gato', 'Cachorro']
    },
    {
        tag: 'defeito',
        question: 'Qual o seu maior defeito?',
        options: ['Fico bravo(a) atoa', 'Fico ansioso(a) a toa', 'Sou preguiçoso(a)', 'Sou avarento(a)']
    },
    {
        tag: 'poder',
        question: 'Se você pudesse ter um super poder, qual seria?',
        options: ['Voar', 'Superforça', 'Controlar mentes', 'Acabar com a fome no mundo']
    },
]


export default function Pronto(){
    const [answers, setAnswers] = useState([])

    function setAnswer(index, value){
        answers[index] = value
        setAnswers(answers)
    }

    function handleSubmit(){
        alert('Carolíticos!')
    }

    return(
        <div style={{height: '100%'}}>
            <Header/>
            <div className='content'>
                <div className='Title'>TESTE DE AURA</div>
                <form className='AuraTest' onSubmit={handleSubmit}>
                    <div className='questionsContainer'>
                        {questions.map((question, index) => {
                            return <QuestionCard question={question} setAnswer={setAnswer} key={index}/>
                        })}

                    </div>
                    <div className="buttonContainer">
                        <button className='submitButton' type='Submit'>VER RESULTADO</button>
                    </div>
                </form>
            </div>
        </div>
    )
}