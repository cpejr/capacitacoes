import React, { useState } from 'react';


export default function Counter() {

  function Multiplica() {
    var intnum = parseInt(numb1);
    var intnum2 = parseInt(numb2)
    setValor(intnum*intnum2);
  }

  function Soma() {
    var intnum = parseInt(numb1);
    var intnum2 = parseInt(numb2)
    setValor(intnum2 + intnum);
  }

  function Divisao() {
    var intnum = parseInt(numb1);
    var intnum2 = parseInt(numb2)
    setValor(intnum / intnum2);
  }

  function Subtracao() {
    var intnum = parseInt(numb1);
    var intnum2 = parseInt(numb2)
    setValor(intnum-intnum2);
  }

  const [numb1, setNumb1] = useState(0);
  const [numb2, setNumb2] = useState(0);
  const [valor, setValor] = useState(0);

  return (
    <div className="container">
     <button onClick={() => Multiplica()}>
        Multiplicação
     </button>

      <button onClick={() => Soma()}>
        Soma
      </button>
      <input type="text" onChange={e => setNumb1(e.target.value)} />
      <input type="text" onChange={e => setNumb2(e.target.value)} />
     
      <div className="contain">

        <button onClick={() => Divisao()}>
          Divisao
        </button>

        <button onClick={() => Subtracao()}>
          Subtração
        </button>
      </div>

      {valor}

    </div>
  );
}

