import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/consistencies/Footer";
import Nav from "./components/consistencies/Nav";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieInfo from "./pages/MovieInfo";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        {/* // <Nav /> & <Footer /> are outside of
         ROUTES (CONSISTENT) */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies moviesdefault={[]} />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
