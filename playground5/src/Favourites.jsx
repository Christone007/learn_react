import React from "react";

export default function Favourites() {
  //   const myFavouriteThings = [];
  const [myFavouriteThings, setMyFavouriteThings] = React.useState([]);

  const allFavouriteThings = ["💦🌹", "😹", "💡☕", "🔥🥊", "🗻🎁"];
  const thingsElements = myFavouriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavouriteThing() {
    console.log("added");
    setMyFavouriteThings((prevMyFavouriteThings) => [
      ...prevMyFavouriteThings,
      allFavouriteThings[prevMyFavouriteThings.length],
    ]);
  }
  return (
    <main>
      <button onClick={addFavouriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}
