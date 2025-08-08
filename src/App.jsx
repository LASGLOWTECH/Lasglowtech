import {
  
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import SingleService from "./pages/singleservice";
function App() {
  return (
  
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/services/:slug" element={<SingleService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </>
  
  );
}

export default App;
