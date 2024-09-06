import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

function Header(){

    return(
        <>
            <header className="header-container">
                
                <Link to="../YakBanana" className="logo">               
                    <img src={logo}></img>
                    <p>SmokeBanana</p>
                        
                </Link>
                    

                <ul className="navigation-bar">

                    <Link to="../YakBanana/shop" className="link">
                        <li>Shop</li>
                    </Link>

                    <Link className="link">
                        <li>Cart</li>
                    </Link>

                    <div className="dropdown">
                        <li>More +</li>
                        <div className="dropdown-content">
                            <Link to="../YakBanana/about" className="link">
                                <li>About Us</li>
                            </Link>
                            <Link to="../YakBanana/contact" className="link">
                                <li>Contact Us</li>
                            </Link>
                            <Link className="link">
                                <li>Locate Us</li>
                            </Link>
                            <Link className="link" to="../YakBanana/Help">
                                <li>Help</li>
                            </Link>
                        </div>
                    </div>

                </ul>
                
                
                <Link to="Login" className="link" style={{alignContent:"center"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#454545" width="100%" height="inherit" viewBox="0 0 24 24" stroke="#454545">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier">

                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>

                        </g>

                        </svg>

                        <p>Account</p>

                    </div>
                        
                </Link>
                
            </header>
        </>
    );

}


export default Header;