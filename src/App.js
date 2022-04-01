import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Work from './pages/Work';
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import About from './pages/About';

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
      <Navbar/>
      <Hero/>
      <Work/>
      <About/>

    </>

  );
}

export default App;
