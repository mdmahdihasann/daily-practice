import React, { useRef } from 'react'
import InputForwordFocus from './InputFcous';

const UseRefSec = () => {
    const fRef = useRef(null)
    function handleChange(){
        fRef.current.focus();
        fRef.current.style.borderRadius = "10px"
    }
  return (
    <div>
        <InputForwordFocus placeholder="type name" ref={fRef}/>
        <button onClick={handleChange} className='border px-3 py-2'>Focus Input</button>
    </div>
  )
}



export default UseRefSec