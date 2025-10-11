import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevIsShown) => !prevIsShown);
  }
  console.log(isShown);

  return (
    <div>
      {props.setup && <h1>{props.setup}</h1>}
      {isShown ? <p>{props.punchline}</p> : null}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </div>
  );
}
