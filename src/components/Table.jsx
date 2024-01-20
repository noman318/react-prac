/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Table = () => {
  const [tableData, setTableData] = useState(null);
  const [string, setString] = useState("");
  const [id, setId] = useState(null);
  //   useEffect(() => {
  //     const fetchJsonData = async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users/"
  //       );
  //       let result = await response.json();
  //       //   console.log("result", result.slice(0, 5));
  //       let newResult = result
  //         ?.map(({ id, username, name }) => ({
  //           id,
  //           username,
  //           name,
  //         }))
  //         .slice(0, 5);

  //       setTableData(newResult);
  //     };
  //     fetchJsonData();
  //   }, []);
  const handleSearch = (e) => {
    const value = +e.target.value;
    // console.log("value", typeof value);
    // console.log("value", value);
    // console.log("searchString", searchString);
    // if (searchString === "") return;
    // else {
    //   let searchId = parseInt(searchString);

    //   if (isNaN(searchId)) {
    //     console.log("Invalid numeric search");
    //     return;
    //   }

    //   let results = tableData?.filter((item) => item.id === searchId);
    //   console.log("results", results);
    // }
    // const target = searchString.trim().toLowerCase(); // Convert to lowercase for case-insensitive comparison

    // const results = tableData?.filter((user) =>
    //   user.username.toString().toLowerCase().includes(target)
    // );
    // console.log("results", results);
    // const results = tableData?.filter((user) => user.id === value);
    // console.log("results", results);
  };

  const handleSearchUrl = async (id) => {
    // console.log("id", id);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    let result = await response.json();
    console.log("result", result);
    setTableData(result);
  };
  //   fetchJsonData();
  console.log("string", string);
  console.log("tableData", tableData);
  return (
    <div>
      <h1>Table</h1>
      {/* <input type="text" onChange={(e) => handleSearch(e)} /> */}
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={() => handleSearchUrl(id)}>
        SEARCH
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {/* {tableData?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.name}</td>
            </tr>
          ))} */}
          <td>{tableData?.id}</td>
          <td>{tableData?.username}</td>
          <td>{tableData?.name}</td>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
