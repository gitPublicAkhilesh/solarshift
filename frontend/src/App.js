import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import DraggableFounder from "./components/DraggableFounder";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Subsidy from "./pages/Subsidy";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/subsidy" element={<Subsidy />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <DraggableFounder />
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
