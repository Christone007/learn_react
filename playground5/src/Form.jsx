export default function Form() {
  function signIn(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(password, email);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signIn}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          autoComplete="example@email.com"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="pass"
        />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}
