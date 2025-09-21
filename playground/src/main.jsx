import { createRoot } from "react-dom/client";
import Header from "/src/Header";
import MainContent from "/src/MainContent";
import Footer from "/src/Footer";

const root = createRoot(document.getElementById("root"));
root.render(<Page />);

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
