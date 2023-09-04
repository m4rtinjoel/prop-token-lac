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
import Web3 from "web3";
import Login from "./Components/Login/Login";

import InmuebleFinal from "./Components/InmuebleFinal/InmuebleFInal";

function App() {
  const [Metamask, setMetamask] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [ruta, setRuta] = useState(false);
  const location = useLocation();
  // const history = useHistory();

  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      /**----------------------------------------- */
      try {
        await window.ethereum.enable();
        //obteniendo la cuenta
        const accounts = await web3Instance.eth.getAccounts();
        console.log("cuenta: ", accounts[0]);
        setAccount(accounts[0]);
        //obtener el saldo de la cuenta
        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
        console.log("saldo", balanceEth);
        setBalance(balanceEth);

        //redirige a otra página
        // history.push('/login');
      } catch (e) {
        console.log("error: ", e);
      }
    } else {
      setMetamask(false);
    }
    /**----------------------------------------- */

    console.log("tenemos conectarWallet");
  };
  // useEffect(() => {
  //   async function Wallet() {
  //     if (typeof window.ethereum !== "undefined") {
  //       setMetamask(true);
  //     } else {
  //       setMetamask(false);
  //     }
  //   }
  //   Wallet();
  // }, []);
  let page = useParams();
  useEffect(() => {
    setRuta(false);

    console.log(location.pathname);
    if (location.pathname === "/login" || location.pathname === "/ruta") {
      setRuta(false);
    } else {
      setRuta(true);
    }

    console.log(ruta);
  }, [page]);
  return (
    <div className="app-container">
      {ruta && <Header connectionWallet={conectarWallet} />}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inmuebles" element={<InmuebleFinal />} />
        <Route
          path="/login"
          element={<Login cuenta={account} saldo={balance} />}
        />
        <Route path="/ruta" element="Hola" />
      </Routes>
      {ruta && <Footer />}
    </div>
  );
}

export default App;
