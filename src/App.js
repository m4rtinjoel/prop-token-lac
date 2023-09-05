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
import { Web3Button } from "@web3modal/react";
import Wallet from "./Components/Wallet/Wallet";
import Perfil from "./Components/Perfil/Perfil";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import SessionMenu from "./Components/SessionMenu/SessionMenu";

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
      } catch (e) {
        console.log("error: ", e);
      }
    } else {
      setMetamask(false);
    }
    /**----------------------------------------- */

    console.log("tenemos conectarWallet");
  };

  /**Validando rutas */
  let page = useParams();
  useEffect(() => {
    setRuta(false);

    console.log(location.pathname);
    if (
      location.pathname === "/Login" ||
      location.pathname === "/SessionMenu"
    ) {
      setRuta(false);
    } else {
      setRuta(true);
    }

    console.log(ruta);
  }, [page]);

  // Conectando WalletConnect

  const chains = [arbitrum, mainnet, polygon];
  const projectId = "3ac2664116164f8e791268281ac3ec50";

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId: "3ac2664116164f8e791268281ac3ec50" }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({
      projectId: "3ac2664116164f8e791268281ac3ec50",
      chains,
    }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <div className="app-container">
      {/* validadndo la ruta */}
      {ruta && <Header connectionWallet={conectarWallet} />}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inmuebles" element={<InmuebleFinal />} />
        <Route
          path="/Login"
          element={<Login cuenta={account} saldo={balance} />}
        />

        <Route path="/ruta" element="Hola" />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/SessionMenu" element={<SessionMenu />} />
      </Routes>
      {ruta && <Footer />}

      {/* Connect wallet */}
      <WagmiConfig config={wagmiConfig}>
        <Web3Button />
      </WagmiConfig>
      <Web3Modal
        projectId={"3ac2664116164f8e791268281ac3ec50"}
        ethereumClient={ethereumClient}
      />
    </div>
  );
}

export default App;
