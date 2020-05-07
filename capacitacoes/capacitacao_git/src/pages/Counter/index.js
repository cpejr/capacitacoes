import React, {useState} from 'react';
import './styles.css';

export default function DynamicCounter() {
  const [count,setCount] = useState(0);
  
  function incrementfive(){
    for(let i = 0 ; i < 5 ; i++){
      setCount(prevCount => prevCount+1);
    }
  }


  return (
    <div className="container">
      <button onClick={()=>setCount(prevCount => prevCount+1)}>
        Add
      </button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count-1)}>
         Remove
      </button>
      <button onClick={()=>setCount(0)}>
         Reset
      </button>
      <button onClick={incrementfive}>
         Increment 5
      </button>
    </div>
  );
}
