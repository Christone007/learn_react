import React from "react";
import padsData from "/src/pads";
import Pad from "/src/Pad";

export default function App(props) {
  const [pads, setPads] = React.useState(padsData);
  const style = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  };

  function toggle() {
    console.log("Clicked!");
  }

  const padElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      id={pad.id}
      color={pad.color}
      on={pad.on}
      handleClick={toggle}
    />
  ));

  return (
    <main>
      <div className="pad-container">{padElements} </div>
    </main>
  );
}
