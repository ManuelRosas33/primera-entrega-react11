import CartWidget from "./CartWidget";


function NavBar() {
     return (
          <>
               <nav className="navbar">
                    <div className="logo">
                         <a>
                              
                              <img src="../assets/logo.svg" alt="Arzaffel Rcrds" />
                         </a>
                    </div>
                    <ul className="menu">
                         <li>
                              <a href="#">Inicio</a>
                         </li>
                         <li>
                              <a href="#">Contacto</a>
                         </li>
                         <li className="dropdown">
                              <a href="#">Tienda</a>
                              <ul className="dropdown-menu">
                                   <li>
                                        <a href="#">Remeras</a>
                                   </li>
                                   <li>
                                        <a href="#">Gorras</a>
                                   </li>
                                   <li>
                                        <a href="#">Llaveros</a>
                                   </li>
                                   <li>
                                        <a href="#">Habanicos</a>
                                   </li>
                              </ul>
                         </li>

                         <CartWidget />
                    </ul>
                    
                    
               </nav>
               
          </>


     );
}

export default NavBar;
