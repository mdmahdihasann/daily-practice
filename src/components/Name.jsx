import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const ChildComponent = ({ name }) => {
  const [state, setState] = useState("");
  return (
    <div>
      <h1>Hello {name}</h1>
      <input className="border" value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
};


const Parent = () => {
  const [name, setName] = useState("Rahim");

  const changeName = () => {
    const names = ["Rahim", "Karim", "Jabbar"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setName(randomName);
  };

  return (
    <div>
      <button onClick={changeName}>Change Name</button>
      <ChildComponent key={name} name={name} />
    </div>
  );
};

export default Parent;
