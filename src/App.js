import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

import Login from "./Components/Login";
import Detalhamento from "./Components/Detalhamento"; // Importe o componente Detalhamento

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/detalhamento" element={<Detalhamento />} /> {/* Adicione esta rota */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
