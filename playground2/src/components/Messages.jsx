import React from "react";

export default function Messages() {
  const [unreadMessages, setUnreadMessages] = React.useState([]);

  const message =
    unreadMessages.length == 0
      ? "You're all caught up"
      : unreadMessages.length == 1
      ? "You have 1 unread message"
      : `You have ${unreadMessages.length} unread messages`;

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
