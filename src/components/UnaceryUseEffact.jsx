import { useState } from "react";

export default function UnaceryUseEffact(){
    const [count, setCount] = useState(0);
  const [price, setPrice] = useState(100);

  function handleClick(){
    setCount(count + 1);
    setPrice(price + 10)
  }
  return (
    <>
      <p>Count: {count}</p>
      <p>Price: {price}</p>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}