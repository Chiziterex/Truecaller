import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Features from "./Components/features";
import Trending from "./Components/Trending";
import LatestArticles from "./Components/articles";
import Download from "./Components/download";
import Footer from "./Components/footer";
import LastFooter from "./Components/lastFooter";

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
      <LastFooter />
    </>
  );
}

export default App;