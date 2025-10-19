import React from "react";

export default function Pad(props) {
  const [on, setOn] = React.useState(props.on);

  function handleClick() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={on ? "on" : undefined}
      onClick={handleClick}
    >
      {props.id}
    </button>
  );
}
