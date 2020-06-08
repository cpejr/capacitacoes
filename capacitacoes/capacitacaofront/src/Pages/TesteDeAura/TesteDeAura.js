import React from 'react'

import Header from '../../Components/Header'
import Card from './Components/Card'

import './TesteDeAura.css'

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
    {
        tag: 'poder',
        question: 'Qual seu nome?',
        options: ['Arthr', 'Joao', 'Carol', 'Elias']
    },
]

export default function TesteDeAura(){
    return (
        <div style={{height: '100%'}}>
            <Header/>
            <div className='conteudo'>
                <div className='Titulo'>
                    TESTE DE AURA
                </div>
                <div className='CentroBranco'>
                    <form className='Formulario'>
                        {
                            questions.map((question)=>{
                                return <Card question={question}/>
                            })
                        }
                    </form>
                    <button className='button'>
                        Enviar
                    </button>
                </div>
            </div>

        </div>
    )
}