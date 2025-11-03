import { useState } from "react";
export default function GroupState() {
  const [move, setMove]= useState({
    x: 0,
    y:0
  })

  function handleMove(e){
    setMove({
        x: e.clientX,
        y: e.clientY
    });
  }
  return (
    <>
      <div onMouseMove={handleMove}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${move.x}px, ${move.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}
