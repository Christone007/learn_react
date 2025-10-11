import React from "react";
import Count from "/src/Count";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function add() {
    console.log("add");
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    console.log("minus");
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section</h1>
      <div className="counter">
        <button className="minus" aria-label="Decrease count" onClick={minus}>
          -
        </button>
        <Count number={count} />
        <button className="plus" aria-label="Increase count" onClick={add}>
          +
        </button>
      </div>
    </main>
  );
}
