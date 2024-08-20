import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Features from "./Components/features";
import Trending from "./Components/Trending";
import LatestArticles from "./Components/articles";
import Download from "./Components/download";
import Footer from "./Components/footer";
import lastFooter from "./Components/lastFooter";

function App() {
  return (
    <>
      <Home />
      <About />
      <Features />
      <Trending />
      <LatestArticles />
      <Download />
      <Footer />
      <lastFooter />
    </>
  );
}

export default App;