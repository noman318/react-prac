/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import ExpComponent from "./ExpComponent";

const Memo = () => {
  //   const [text, setText] = useState("");
  //   const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  //   console.log("text", text);
  //   const expensiveFunction = (n) => {
  //     console.log("function trigger");
  //     let total = 0;
  //     for (let i = 1; i < n; i++) {
  //       total += i;
  //     }
  //     return total;
  //   };
  //   const sum = useMemo(() => expensiveFunction(number), [number]);
  //   console.log("component re-render");
  //   console.log("country", country);
  console.log("component re render");
  // so we will wrap this obj in a useMemo so that the component will not rerender even if the userType is changed
  // userType value is memoized and dependent on age and country
  const userType = useMemo(
    () => ({
      underAge: age < 18 ? true : false,
      citizen: country === "USA" ? true : false,
    }),
    [age, country]
  );
  useEffect(() => {
    // here the user type changes even if the name is changed
    console.count("user type changed");
  }, [userType]);
  return (
    <>
      <div>
        <h3>Memo example</h3>
        {/* <input
          type="text"
          placeholder="Type here..."
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter number..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <span>{sum}</span> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          gap: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter number..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="country">Country</label>
        <select name="country" onChange={(e) => setCountry(e.target.value)}>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="RSA">RSA</option>
          <option value="JPN">JPN</option>
        </select>
      </div>
      <ExpComponent />
    </>
  );
};

export default Memo;
