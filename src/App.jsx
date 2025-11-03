import { useEffectEvent } from 'react';
import { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);

  const onTick = useEffectEvent(() => {
    setCount(c=> c + 1);
  });

  useEffect(() => {
    
    console.log('✅ Creating an interval');
    const id = setInterval(() => {
      console.log('⏰ Interval tick');
      onTick()
    }, 1000);
    return () => {
      console.log('❌ Clearing an interval');
      clearInterval(id);
    };
  }, []);

  return <h1>Counter: {count}</h1>
}
