import React, { useState } from "react";
import "./SessionMenu.css";
import Logo from "../../images/logo.png";
import Menu from "../../images/menu1.png";
import Wallet from "../Wallet/Wallet";

//Coneect wallet
import { Web3Button } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import Web3 from "web3";
import InmuebleFinal from "../InmuebleFinal/InmuebleFInal";

const SessionMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [Metamask, setMetamask] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [walletDetallesVisible, setWalletDestallesVisible] = useState(false);

  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
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
        setBalance(balanceEth);
        console.log("saldo", balanceEth);
        //redirige a otra página
      } catch (e) {
        console.log("error: ", e);
      }
    } else {
      setMetamask(false);
    }
    /**----------------------------------------- */

    console.log("Tenemos metamask");
  };
  //instancia web3
  const web3 = new Web3(window.ethereum);

  //Obtener la direccionde la cuenta del usuario
  web3.eth
    .getAccounts()
    .then((accounts) => {
      const address = accounts[0]; //dirección de la cuenta del usuario
      console.log("Cuenta: ", address);
      setAccount(address);

      //saldo de la cuenta
      web3.eth
        .getBalance(address)
        .then((balance) => {
          const etherBalance = web3.utils.fromWei(balance, "ether");
          console.log("Saldo: ", etherBalance);
          setBalance(etherBalance);
        })
        .catch((error) => {
          console.error("Error al obtener el saldo: ", error);
        });
    })
    .catch((error) => {
      console.log("Error al obtener la dirección de la cuenta.");
    });

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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

  //Mostrar detalles de la cuenta
  const walletDetalles = () => {
    setWalletDestallesVisible(!walletDetallesVisible);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="primer-div">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="connection-wallet">
                <div className="connect-wallet">
                  {/* Connect wallet */}
                  <WagmiConfig config={wagmiConfig}>
                    <Web3Button />
                  </WagmiConfig>
                  <Web3Modal
                    projectId={"3ac2664116164f8e791268281ac3ec50"}
                    ethereumClient={ethereumClient}
                  />
                </div>
                <button onClick={conectarWallet} className="metamask-connect">
                  <i>Metamask</i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mostrar-botones-contenido">
          <div className="botones">
            <div className="col-md-4 col-sm-12">
              <div className="segundo-div">
                <button className="imagen" onClick={toggleMenu}>
                  <img src={Menu} alt="Menu" />
                  <span className="texto-menu">Abrir Menu</span>
                </button>
                {menuVisible && (
                  <div className="desplegable">
                    <button className="menu-button">Crear Token</button>
                    <button className="menu-button">Inmuebles</button>
                    <button className="menu-button" onClick={walletDetalles}>
                      Wallets
                    </button>
                    <button className="menu-button">Mis activos</button>
                    <button className="menu-button">configuracion</button>
                    <button className="menu-button">Cerrar Session</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/*Mostrando los detalles de la cuenta */}
          <div
            className="wallet-detalles"
            style={{ display: walletDetallesVisible ? "block" : "none" }}
          >
            <p>
              Dirección: {account ? account.slice(0, 5) : ""}...
              {account ? account.slice(account.length - 4, account.length) : ""}
            </p>
            <p>Saldo: {balance}</p>
          </div>
        </div>
        {/* Connect wallet */}

        {/* <label className="terminos">@2023 PropToken Derechos Reservados</label> */}
      </div>
    </>
  );
};

export default SessionMenu;
