import React from "react";

export default function Messages() {
  const [unreadMessages, setUnreadMessages] = React.useState([]);

  return (
    <div>
      {unreadMessages.length > 0 && (
        <h1>You have {unreadMessages.length} unread messages!</h1>
      )}

      {unreadMessages.length == 0 && <p>You have no unread messages</p>}
    </div>
  );
}
