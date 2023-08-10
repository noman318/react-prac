/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const OtherQuestions = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const numArr = [78, 89, 23, 90, 200];
  const sortedData = numArr.sort((num1, num2) => num1 - num2);
  // console.log("sorting", sortedData);

  const handleValueChange = (e) => {
    setNumber(e.target.value);
    setResult("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedNumber = parseInt(number);
    console.log("newNumber", parsedNumber);
    if (!isNaN(parsedNumber)) {
      setResult(
        parsedNumber % 5 === 0 ? "Number is Divisible by 5" : "Not divisible"
      );
    }
  };
  return (
    <div className="App">
      <div className="App">
        <h1>Hello React Practice</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="number"
            value={number}
            onChange={handleValueChange}
          />
          <button disabled={!number}>Submit</button>
          <br />
          {result && <h3>{result}</h3>}
        </form>
      </div>
    </div>
  );
};

export default OtherQuestions;
