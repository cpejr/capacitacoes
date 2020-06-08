import React from 'react'

import { IconContext } from "react-icons";
import {WiStars} from 'react-icons/wi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RiFacebookCircleLine} from 'react-icons/ri'

import './Header.css'

export default function Header(){
    return(
        <div className='header'>
            <div className='title'>   
                <IconContext.Provider value={{ size: '1.8em', color: '#ffff' }}>
                    <WiStars />
                </IconContext.Provider>
                <div className='Caroliticos'>
                    Caroliticos
                </div>
            </div>
            <div className='navBar'>
                <div>
                    Home
                </div>
                <div>  
                    Sobre Nós
                </div>
                <div>
                    Teste de Aura
                </div>
            </div>
            <div className='socialMedia'>
                <IconContext.Provider value={{ size: '1.8em', color: '#ffff' }}>
                    <AiOutlineInstagram />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '1.8em', color: '#ffff' }}>
                    <RiFacebookCircleLine />
                </IconContext.Provider>
            </div>
        </div>
    )
}