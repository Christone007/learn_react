import Joke from "/src/components/Joke";
import jokeData from "/src/jokeData";

const jokeElements = jokeData.map((joke) => {
  return <Joke setup={joke.setup} punchline={joke.punchline} />;
});

export default function App() {
  return <>{jokeElements}</>;
}
