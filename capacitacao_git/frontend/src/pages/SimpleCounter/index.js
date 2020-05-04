import React, {useState} from 'react';




//()=>setCount(count+1) just work as an arrow function

export default function Counter() {
  const [count,setCount] = useState(0);

  return (
   <div className="container">
     <button onClick={()=>setCount(count+1)}>
        Count {count}
     </button>
   </div>
  );
}
