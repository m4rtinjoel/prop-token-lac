import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./Components/Inicio/Inicio";
import Inmueble from "./Components/Inmuebles/Inmueble";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inmuebles" element={<Inmueble />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
