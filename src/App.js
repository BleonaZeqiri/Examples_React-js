import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/Products" element={<Products />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
