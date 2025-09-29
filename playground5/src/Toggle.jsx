import React from "react";

export default function Toggle() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function handleClick() {
    // setIsGoingOut((prevIsGoingOut) => (prevIsGoingOut ? false : true));
    setIsGoingOut(!isGoingOut);
  }

  return (
    <main className="container2">
      <h1> Do I feel like going out tonight?</h1>
      <button className="value" onClick={handleClick}>
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}
