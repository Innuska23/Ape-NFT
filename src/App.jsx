import classNames from "classnames";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import MindMap from "./components/MindMap/MindMap";
import Faq from "./components/FAQ/Faq";
import Hero from "./components/Hero/Hero";
import Arts from "./components/Arts/Arts";
import ContactUs from "./components/ContactUs/ContactUs";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div
      className={classNames(
        "font-[Biro Script Plus Bold US] m-auto",
        "flex justify-center flex-col min-w-[320px] max-w-[480px]",
        "md:min-w-[768px]",
        "xl:min-w-[1280px]"
      )}
    >
      <div
        className={classNames(
          "mt-[54px] mx-[8px] h-[542px] bg-rose-500 rounded-xl pb-[19px] relative",
          "md:h-[421px]",
          "xl:h-[677px] xl:pr-[16px]"
        )}
      >
        <Header />
        <Hero />
      </div>
      <About />
      <MindMap />
      <Faq />
      <Arts />
      <ContactUs />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
