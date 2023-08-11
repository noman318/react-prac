/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Effect = () => {
  //   const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });
  //   console.count("Component rendered");
  //   useEffect(() => {
  //     console.count("useEffect runs");
  //     document.title = `Count ${number}`;
  //   });
  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };
  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: !prev.selected }));
  };
  return (
    <div>
      <h4>Effect</h4>
      {/* <h5>Count {number}</h5>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button> */}
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>{`{name:${state.name}, selected:${state.selected}}`}</p>
    </div>
  );
};

export default Effect;
