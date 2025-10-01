import React from "react";
import ReactDOM from "react-dom/client";

export default function Form() {
  return (
    <section>
      <h1>Signup form</h1>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </form>
    </section>
  );
}
