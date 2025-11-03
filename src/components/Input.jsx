import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');
  function onChange(e){
    setText(e.target.value)
  }
  return (
    <>
      <Input label="First input" hangleChange={onChange} value={text}/>
      <Input label="Second input" hangleChange={onChange} value={text}/>
    </>
  );
}

function Input({ label,value, hangleChange }) {
  
  
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={hangleChange}
      />
    </label>
  );
}
