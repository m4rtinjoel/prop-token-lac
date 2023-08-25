// import React, { useState } from "react";
// import "./Header.css";
// import Logo from "../../images/logo.jpeg";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const hamburgerMenu = () => {
//     setIsOpen(!isOpen);
//     console.log("click");
//   };
//   return (
//     <>
//       <div className="header-container">
//         <div className="navbar">

//           <button className={`hamburger-button ${isOpen ? "open" : ""}`}
//             id="hamburgerBtn"
//             onClick={hamburgerMenu}
//           >
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </button>

//           <nav className={`nav-menu ${isOpen ? "open" : ""}`} id="navMenu">
//             <div className="links">
//               <a href="/">Inicio</a>
//               <a href="/inmuebles">Inmuebles</a>
//               <a href="#">Blog</a>
//               <a href="#">Nosotros</a>
//               <a href="#">Ayuda</a>
//             </div>
//           </nav>
//         </div>
//         <div className="logo">
//           <img src={Logo} alt="logo" />
//         </div>
//         <div className="links">
//           <a href="/">Inicio</a>
//           <a href="/inmuebles">Inmuebles</a>
//           <a href="#">Blog</a>
//           <a href="#">Nosotros</a>
//           <a href="#">Ayuda</a>
//         </div>
//         <div className="acceder">
//           <input type="button" value="Acceder" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;





import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="header-container">
      
  
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      
      <div className="header-items">
        <div className="linksI">
            <a href="/">Inicio</a>
            <a href="/inmuebles">Inmuebles</a>
            <a href="#">Blog</a>
            <a href="#">Nosotros</a>
            <a href="#">Ayuda</a>
          </div>
          </div>

      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="header-items">
        <div className="links">
            <a href="/">Inicio</a>
            <a href="/inmuebles">Inmuebles</a>
            <a href="#">Blog</a>
            <a href="#">Nosotros</a>
            <a href="#">Ayuda</a>
          </div>
          </div>
        
    
        {/* <div className="acceder">
          <input type="button" value="Acceder" />
        </div> */}
      
        <navar className={`hamburger-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          
        </navar>

        <nav className={`nav-menu ${isOpen ? "open" : ""}`} id="navMenu">
          <div className="links">
            <a href="/">Inicio</a>
            <a href="/inmuebles">Inmuebles</a>
            <a href="#">Blog</a>
            <a href="#">Nosotros</a>
            <a href="#">Ayuda</a>
          </div>
          {/* Botón Acceder dentro del menú hamburguesa */}
          <div className={`acceder ${isOpen ? "hidden" : ""}`}>
            <input type="button" value="Acceder" />
          </div>
        </nav>
        </div>
    </div>
  );
};

export default Header;

