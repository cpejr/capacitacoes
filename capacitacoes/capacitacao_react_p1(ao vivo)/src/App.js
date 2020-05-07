import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const DATA = [
  { name: 'maça', selected: false },
  { name: 'banana', selected: false },
  { name: 'pera', selected: false },
  { name: 'morango', selected: false }];


function App(props) {
  const [data, setData] = useState(DATA);

  function generateItem(item, index) {
    let backgroundColor = '#444';

    const style = {};

    if (item.selected)
      backgroundColor = 'green';

    style.backgroundColor = backgroundColor;

    function handleClick(index) {
      const newData = [...data];
      newData[index].selected = !newData[index].selected;
      setData(newData);
    }


    return (
      <div className="quadrado d-flex justify-content-center align-items-center" style={style}>
        <button onClick={() => handleClick(index)}>{item.name}</button>
      </div>
    )
  }

  return (
    <div className="App">
      <h1 className="w-100">Lista de compras</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {data.map((value, index) => {
          return generateItem(value, index);
        })}
      </div>
    </div>
  );
}

export default App;
