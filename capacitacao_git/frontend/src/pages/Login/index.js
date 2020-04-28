import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home(props) {
    return (
        <div className="fullPage">
            <h1>Título da pagina de Login</h1>

            <div className="yellowSquareContainer">
                <div className="yellowSquare">
                    <h1>login login login</h1>

                    <div className="yellowSquare">
                        <h3>Nome: </h3>
                        <input className="loginInput"></input>
                    </div>
                    <div className="yellowSquare">
                        <h3>Senha: </h3>
                        <input className="loginInput"></input>
                    </div>

                    <div className="yellowSquareContainer">
                        <div className="yellowSquare">
                            <Link to='/'>
                                <button className='buttonText'>
                                    <h3>Logarr</h3>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}