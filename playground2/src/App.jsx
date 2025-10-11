import Joke from "/src/components/Joke";
import jokeData from "/src/jokeData";
import Messages from "/src/components/Messages";

const jokeElements = jokeData.map((joke) => {
  return <Joke setup={joke.setup} punchline={joke.punchline} id={joke.id} />;
});

export default function App() {
  // return <>{jokeElements}</>;
  return <Messages />;
}
