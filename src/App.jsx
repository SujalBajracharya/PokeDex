import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Router components
import Pokemons from "./components/Pokemons";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Search from "./components/Search"; 
import Compare from "./components/Compare";
import Premium from "./components/Premium";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Title />
      <Menu />
      <Routes>
        {/* Default Home Route */}
        <Route path="/home" element={<Pokemons />} />
        <Route path="/" element={<Pokemons />} />
        <Route path="/search" element={<Search />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
