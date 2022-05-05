import logo from './logo.svg';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Work from './pages/Work';
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import About from './pages/About';
import Skills from './pages/Skills';
import Footer from './pages/Footer';
import ContactForm from './components/ContactForm';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
    {/*  <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navbar />}>

            <Route path="Hero" element={<Hero />} />
            <Route path="Work" element={<Work />} />
            <Route path="/" element={<Hero />} />
           
          </Route>
        </Routes>
      </BrowserRouter> */}
      <ScrollToTop smooth/>
      <Navbar/>
      <Hero/>
      <Work/>
      <About/>
      <Skills/>
      <Footer/>
      <ContactForm/>

    </>

  );
}

export default App;
