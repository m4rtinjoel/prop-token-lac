import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import { React, useState, useEffect } from "react";
import "./App.css";
import Inicio from "./Components/Inicio/Inicio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Wallet from "./Components/Wallet/Wallet";
import Perfil from "./Components/Perfil/Perfil";

import SessionMenu from "./Components/SessionMenu/SessionMenu";
import InmuebleFinal from "./Components/InmuebleFinal/InmuebleFInal";

import VistaInmueble from "./Components/VistaInmueble/VistaInmueble";


function App() {
  const [ruta, setRuta] = useState(false);
  const location = useLocation();

  /**Validando rutas */
  let page = useParams();
  useEffect(() => {
    setRuta(false);

    console.log(location.pathname);
    if (
      location.pathname === "/login" ||
      location.pathname === "/SessionMenu"
    ) {
      setRuta(false);
    } else {
      setRuta(true);
    }

    console.log(ruta);
  }, [page]);

  const isVistaInmuebleRoute = location.pathname === "/VistaInmueble";
  return (
    <div className="app-container">
      {/* validadndo la ruta */}
      {ruta && <Header />}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inmuebles" element={<InmuebleFinal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/SessionMenu" element={<SessionMenu />} />
        <Route
        path="/VistaInmueble"
        element={<VistaInmueble inVistaInmueble={isVistaInmuebleRoute} />}
      />
      
      </Routes>
      {ruta && <Footer />}
    </div>
  );
}

export default App;
