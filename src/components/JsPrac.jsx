import React from "react";

export default function JsPrac() {
  function outer() {
    let a = 0;
    function inner() {
      a++;
      a++;
      a++;
      a++;
      // console.log(a);
      a++;
      a++;
      // console.log("new", a);
    }
    return inner;
  }
  const data = outer();
  data();
  let arr = [3, 4, 5, 6, 88, 8, 33, 22, 2, 99, 9];
  // console.log("arr", arr);

  // console.log(arr, arr.toSorted()); // it does not modifies original array
  // console.log(arr, arr.sort()); // it modifies original array
  // console.log("arr", arr);

  let books = [
    {
      bookName: "The Lord of the Rings",
      bookAuthorName: "J.R.R. Tolkien",
      bookGenre: "Fantasy",
    },
    {
      bookName: "Harry Potter and the Philosopher's Stone",
      bookAuthorName: "J.K. Rowling",
      bookGenre: "Fantasy",
    },
    {
      bookName: "The Hitchhiker's Guide to the Galaxy",
      bookAuthorName: "Douglas Adams",
      bookGenre: "Science Fiction",
    },
  ];
  const groupByBookGenres = Object.groupBy(books, (book) => book.bookGenre);
  // console.log("groupByBookGenres", groupByBookGenres);
  function Person(name) {
    this.name = name;
    this.age = 21;
  }
  var object = new Person("Sudheer");
  // console.log("object", object);
  function Foo() {
    var a = 0;
    a++;
    console.log("a", a);
  }
  // Foo();

  // Currying function
  const multiArgFunc = (a, b, c) => a + b + c;
  // console.log(multiArgFunc(2, 3, 1));
  const singleArgFunc = (a) => (b) => (c) => a + b + c;
  const newAssignment = singleArgFunc(2);
  console.log("newAssignment", newAssignment);
  const newAssignment1 = singleArgFunc(2)(2);
  console.log("newAssignment1", newAssignment1);

  const newAssignment2 = singleArgFunc(2)(2)(3);
  console.log("newAssignment2", newAssignment2);

  return (
    <div>
      <h2>Js Prac</h2>
    </div>
  );
}
