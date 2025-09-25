export default function Joke(props) {
  console.log(props);
  return (
    <div>
      {props.setup && <h1>{props.setup}</h1>}
      <p>{props.punchline}</p>
      <hr />
    </div>
  );
}
