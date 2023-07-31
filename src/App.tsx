import "./App.sass";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import Context from "./context/Context";

function App() {
  return (
    <>
      <Context>
        <Header />
        <Main />
        <Footer />
      </Context>
    </>
  );
}

export default App;
