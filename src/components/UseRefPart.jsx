import { useRef, useState } from 'react';

export default function UseRefPart() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  let uref = useRef(null)

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    uref.current=setInterval(()=>{
        setNow(Date.now())
    })
  }
  function handleStop(){
    clearInterval(uref.current)
  }
  let secondsPassed =0;
  if(startTime !== null && now !== null){
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}
