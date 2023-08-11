import React, { useEffect, useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const person = useMemo(() => {
    return { age, name };
  }, [name, age]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, error, loading } = useFetch(url);
  // console.log("loading", loading);
  //   console.log("data", data);
  //   console.log("error", error);

  useEffect(() => {
    // console.log(person);
  }, [person]);
  return (
    <>
      <div
        style={{ marginTop: "20px", background: darkMode ? "#333" : "#ffff" }}
      >
        <form>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="mode">Dark Mode</label>
          <input
            type="checkbox"
            name="mode"
            id="mode"
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </form>
        {}
      </div>
      <div>
        {loading ? (
          "Loading..."
        ) : error ? (
          "Error"
        ) : (
          <div>
            {data?.map((item, index) => (
              <div key={index}>
                <h6>{item?.name}</h6>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
