import React from "react";
import Header from "/src/Header";
import Body from "/src/Body";
import pads from "./pads";

export default function App() {
  // const [result, setResult] = React.useState("Click Me");
  const [userName, setUserName] = React.useState("Joe");

  // console.log(result);
  // console.log(setResult);

  // function handleClick(e) {
  //   setResult("You clicked me! 😎");
  // }

  // function handleMouseOver() {
  //   console.log("hovering over the image!");
  // }
  return (
    <main>
      {/* <img
        src="https://picsum.photos/640/360"
        alt="placeholder image from picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>{result}</button> */}
      {/* <Header userName={userName} />
      <Body userName={userName} /> */}
      <div className="pad-container"></div>
    </main>
  );
}
