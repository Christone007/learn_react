import Header from "/src/components/Header";
import Entry from "/src/components/Entry";
import placesData from "/src/data";

export default function App() {
  const entryElements = placesData.map((place) => (
    <Entry key={place.id} {...place} />
  ));

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
