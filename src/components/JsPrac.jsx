import React from "react";

export default function JsPrac() {
  function outer() {
    let a = 0;
    function inner() {
      a++;
      a++;
      a++;
      a++;
      console.log(a);
      a++;
      a++;
      console.log("new", a);
    }
    return inner;
  }
  const data = outer();
  data();
  return (
    <div>
      <h4>Js Prac</h4>
    </div>
  );
}
