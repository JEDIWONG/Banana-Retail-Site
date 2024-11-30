import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

function Header(){

    return(
        <>
            <header className="header-container">
                
                <Link to="../Banana-Retail-Site" className="logo">               
                    <img src={logo} className="logo-img"></img>
                    <p>SmokeBanana</p>
                        
                </Link>
                    

                <ul className="navigation-bar">

                    <li>
                        <Link to="../Banana-Retail-Site/shop" className="link">
                            Shop
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="../Banana-Retail-Site/cart" className="link">
                            Cart
                        </Link>
                        
                    </li>
                    

                    <li className="dropdown">
                        <p>More</p>
                        <div className="dropdown-content">

                        <Link to="Login" className="dropdown-account" style={{alignContent:"center"}}>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gold" width="100%" height="inherit" viewBox="0 0 24 24" stroke="black">

                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                <g id="SVGRepo_iconCarrier">

                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>

                                </g>

                                </svg>

                                <p>Account</p>

                            </div>
                        
                         </Link>

                            <li>
                                <Link to="../Banana-Retail-Site/about" className="link">
                                    About
                                </Link>
                            </li>
                            

                            <li>
                                <Link to="../Banana-Retail-Site/contact" className="link">
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link to="../Banana-Retail-Site/locate us" className="link">
                                    Locate Us
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="../Banana-Retail-Site/locate us" className="link">
                                    Help
                                </Link>
                            </li>
                            

                        </div>
                    </li>

                </ul>
                
                
                
                
            </header>
        </>
    );

}


export default Header;