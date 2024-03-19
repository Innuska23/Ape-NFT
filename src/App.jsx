import classNames from "classnames";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
      <Footer />
    </div>
  );
}

export default App;
