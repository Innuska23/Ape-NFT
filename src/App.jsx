import classNames from "classnames";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import MindMap from "./components/MindMap/MindMap";
import Faq from "./components/FAQ/Faq";
// import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div
      className={classNames(
        "font-[Biro Script Plus Bold US] m-auto flex justify-center flex-col min-w-[320px] max-w-[480px]",
        "md:min-w-[768px]",
        "xl:min-w-[1280px]"
      )}
    >
      <Header />
      {/* <Hero /> */}
      <About />
      <MindMap />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
