import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Features from "./Components/features";
import Trending from "./Components/Trending";
import LatestArticles from "./Components/articles";
import Download from "./Components/download";

function App() {
  return (
    <>
      <Home />
      <About />
      <Features />
      <Trending />
      <LatestArticles />
      <Download />
    </>
  );
}

export default App;