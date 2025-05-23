import { useState } from "react"

export const PlusAdd = () => {
  const [x, setX] = useState(0);
  
  const changeX = () => {
    setX(x + 1);
  }

console.log("X:", x);


  return ( <>
    
    <button onClick={changeX}>ändra</button>

    {x}
    </>
  );
}