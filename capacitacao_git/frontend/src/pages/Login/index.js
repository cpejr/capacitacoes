import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { AccountCircle, VpnKey } from '@material-ui/icons';
import './styles.css';

export default function Home(props) {
  return (
    <div className="fullPage d-flex flex-column">
      <div className="title">
        <p style={{ color: '#fff' }}>Controle de Estoque</p>
      </div>
      <div className="login-container d-flex flex-column ">
        <h1 style={{ color: '#fff' }}>Login  </h1>

        <div className="input-container d-flex flex-column w-100  " >
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><AccountCircle /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><VpnKey/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              type = "password"
            />
          </InputGroup>

        </div>
        <Button variant="dark mt-3">Entrar</Button>{' '}
      </div>


    </div>
  );
}