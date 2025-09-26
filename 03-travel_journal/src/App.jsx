import Header from "/src/components/Header";
import Entry from "/src/components/Entry";
import placesData from "/src/data";

export default function App() {
  const entryElements = placesData.map((place) => (
    <Entry
      img={{ src: place.img.src, alt: place.img.alt }}
      title={place.title}
      country={place.country}
      googleMapsLink={place.googleMapsLink}
      dates={place.dates}
      text={place.text}
    />
  ));

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
