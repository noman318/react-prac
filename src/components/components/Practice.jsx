import React, { useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  const changeCount = (amount) => {
    setCount((prev) => prev + amount);
  };
  return (
    <div>
      <h1>Practice</h1>
      <h4>Counter {count}</h4>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
    </div>
  );
};

export default Practice;
