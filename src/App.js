import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import "./App.css";
import Inicio from "./Components/Inicio/Inicio";
import Inmueble from "./Components/Inmuebles/Inmueble";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Web3 from "web3";
import Login from "./Components/Login/Login";
import FaqComponent from "./Components/PreguntasFrecuente/Pregunta";
import { Web3Button } from '@web3modal/react'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

function App() {
  const [Metamask, setMetamask] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
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

  // Conectando WalletConnect

  const chains = [arbitrum, mainnet, polygon]
  const projectId = 'YOUR_PROJECT_ID'

  const { publicClient } = configureChains(chains, [w3mProvider({ projectId: "3ac2664116164f8e791268281ac3ec50" })])
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId:"3ac2664116164f8e791268281ac3ec50", chains }),
    publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  return (

    <div className="app-container">
      <BrowserRouter>
        <Routes>
          {/* Rutas para el inicio de la página */}
          <Route path="*" element={<Home />} >

          </Route>

           {/* Rutas para el Login de la página */}
          <Route path="/Login" element={<Login conectar={conectarWallet}/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* Connect wallet */}
      <WagmiConfig config={wagmiConfig}>
       <Web3Button />
      </WagmiConfig>
      <Web3Modal projectId={"3ac2664116164f8e791268281ac3ec50"} ethereumClient={ethereumClient} />
    </div>
  );

  function Home() {
    return (
      <>
        <Header connectionWallet={conectarWallet} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inmuebles" element={<Inmueble />} />
        </Routes>
        <FaqComponent></FaqComponent>

        <Footer />
      </>
    );
  }
}

export default App;
