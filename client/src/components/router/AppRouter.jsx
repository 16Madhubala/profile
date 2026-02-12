import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Resume from "../../pages/Resume/Resume";
import Contact from "../../pages/Contact/Contact";
function AppRouter() {
  return (
    <>
      <Navbar />

      {/* Space below fixed navbar */}
      <div style={{ height: "80px" }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      
    </>
  );
}

export default AppRouter;
