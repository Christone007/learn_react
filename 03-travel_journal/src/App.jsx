import Header from "/src/components/Header";
import Entry from "/src/components/Entry";

export default function App() {
  return (
    <>
      <Header />
      <Entry name="Emeka" age="27" occupation="doctor" />
      <Entry name="Salome" age="24" occupation="student" />
      <Entry name="Nonye" age="22" occupation="student" />
    </>
  );
}
