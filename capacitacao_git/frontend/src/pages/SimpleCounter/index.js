import React, {useState} from 'react';


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
