import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import Product from "./screens/Product";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="product/:id" element={<Product/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
