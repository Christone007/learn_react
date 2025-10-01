import React from "react";

export default function App() {
  const [result, setResult] = React.useState("Click Me");
  console.log(result);
  console.log(setResult);

  function handleClick(e) {
    setResult("You clicked me! 😎");
  }

  function handleMouseOver() {
    console.log("hovering over the image!");
  }
  return (
    <main>
      <img
        src="https://picsum.photos/640/360"
        alt="placeholder image from picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>{result}</button>
    </main>
  );
}
