import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MyPlants from "./pages/MyPlants";
import About from "./pages/About";

export default function App() {
  return (
    <div className="appShell">
      <Header />

      <main className="container mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-plants" element={<MyPlants />} />
          <Route path="/about" element={<About />} />

          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
   
  );
  
}