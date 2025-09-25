import Joke from "/src/components/Joke";

export default function App() {
  return (
    <>
      <Joke
        setup="Why did the computer go to therapy?"
        punchline="It had too many unresolved issues."
        upvotes={232}
        downvotes={1}
        comments={["one", "two"]}
        isPun={true}
      />
      <Joke
        setup="What did the pizza say to the topping?"
        punchline="“You’re the reason I’m so cheesy!”"
        upvotes={232}
        downvotes={1}
        comments={["one", "two"]}
        isPun={true}
      />
      <Joke
        setup="Why don’t parrots use smartphones?"
        punchline="They already have tweet-er."
        upvotes={232}
        downvotes={1}
        comments={["one", "two"]}
        isPun={true}
      />
      <Joke
        setup="Why did the book join the gym?"
        punchline="It wanted to work on its spine."
        upvotes={232}
        downvotes={1}
        comments={["one", "two"]}
        isPun={true}
      />
      <Joke
        setup="What do you call a car that never stops talking?"
        punchline="A Honda Blabber."
        upvotes={232}
        downvotes={1}
        comments={["one", "two"]}
        isPun={true}
      />
      <Joke
        punchline="It's hard to explain puns to kleptomaniacs because they always take things literally"
        upvotes={232}
        downvotes={1}
        comments={["one", "two"]}
        isPun={true}
      />
    </>
  );
}
