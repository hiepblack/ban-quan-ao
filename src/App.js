import "./App.css";
import Be_Header from "./components/be-header/Be_Header";
import Header from "./components/header/Header";
import Slide from "./components/slideshow/Slide";
import Hot_Collect from "./components/hot-collects/Hot_Collect";
import New_Product from "./components/newProduct/New_Product";
import Title from "./components/title/Title";

function App() {
  return (
    <div className="App">
      <Be_Header />
      <Header />
      <div className="main">
        <Slide />
        <Hot_Collect />
      </div>
    </div>
  );
}

export default App;
