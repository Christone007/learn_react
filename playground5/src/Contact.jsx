import React from "react";
import avatar from "/src/assets/user.png";
import starFilled from "/src/assets/star-filled.png";
import starEmpty from "/src/assets/star-empty.png";

export default function Contact() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt={
            "User profile picture of " +
            contact.firstName +
            " " +
            contact.lastName
          }
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite
                ? "Remove from favourites"
                : "Add to favourites"
            }
            className="favorite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "Filled star icon" : "Empty star icon"}
              className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
