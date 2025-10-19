import React from "react";
import padsData from "/src/pads";
import Pad from "/src/Pad";

export default function App(props) {
  const [pads, setPads] = React.useState(padsData);
  const style = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  };

  function toggle(id) {
    // console.log(id);
    const newPads = pads.map((pad) => {
      if (pad.id == id) {
        return {
          ...pad,
          on: !pad.on,
        };
      } else {
        return pad;
      }
    });

    setPads(newPads);
    // console.log(pads);

    // setPads((prevPads) => {
    //   prevPads.map((pad) => {
    //     return pad.id == id ? { ...pad, on: !pad.on } : pad;
    //   });
    // });
    // console.log(pads);
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
