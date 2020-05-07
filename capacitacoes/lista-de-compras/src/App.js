import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const DATA = [{
  name: 'maça',
  seleted: false
}, {
  name: 'banana',
  seleted: false
}, {
  name: 'pera',
  seleted: false
}, {
  name: 'morango',
  seleted: false
}, {
  name: 'melancia',
  seleted: false
}, {
  name: 'laranja',
  seleted: false
}, {
  name: 'abacaxi',
  seleted: false
}];

function App() {

  const [data, setData] = useState(DATA);

  console.log('renderizou');

  useEffect(() => {
    console.log('EXECUTOU UMA VEZ');
  }, [])

  function handleClick(index) {

    const newData = [...data];
    const item = newData[index];

    item.seleted = !item.seleted;

    setData(newData);

    console.log(item);
    console.log('Clicou');
  }

  return (
    <div className="App">
      <h1>Lista de compras</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {data.map((obj, index) => {
          return <Square value={obj.name} _selected={obj.seleted} onClick={() => handleClick(index)} />
        })}
      </div>
    </div>
  );
}

function Square(props) {
  const { value, _selected, onClick } = props;

  const [selected, setSelected] = useState(_selected);

  useEffect(() => {
    setSelected(_selected);
  }, [_selected]);

  const style = {
    borderRadius: '20px',
    margin: '10px',
  };
  if (selected)
    style.backgroundColor = 'green';
  else
    style.backgroundColor = '#666';

    console.log(style.padding)

  return (
    <div className='square d-flex justify-content-center align-items-center' style={style}>
      <button onClick={() => onClick()} >{value}</button>
    </div>
  )
}

export default App;
