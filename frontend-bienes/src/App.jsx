import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Properties from "./pages/properties";


function App() {
  return (
    <div className='App'>
      <Header />

      <div className='App-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propiedades" element={<Properties />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
