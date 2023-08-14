/* eslint-disable no-unused-vars */
import React from "react";

const ExpComponent = React.memo(() => {
  console.log("Expensive component re render");
  let total = 0;
  for (let i = 0; i < 1000000; i++) {
    total += i;
  }
  return (
    <div>
      <h2>ExpComponent</h2>
    </div>
  );
});

export default ExpComponent;
