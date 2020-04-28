import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


export default function Home(props) {
    return (
        <div className="fullPage">
            <h1>Título da Homepage</h1>
            <div className="yellowSquareContainer">
                <div className="yellowSquare">
                    <img src="lampinho.png" className="imgClass" alt="Main" />
                </div>
                <div className="yellowSquare">
                    <h1>Teste teste teste</h1>
                    <Link to='/login'>
                        <button className='buttonText'>
                            <h3>Fazer Login</h3>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}