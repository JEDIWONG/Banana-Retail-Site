import "../style/Cart.css"
import {Product} from "../components/Product.jsx"

function CartItem(props){
    return(
        <>
            <div className="cart-item">
                <input type="checkbox"></input>
                <div className="cart-card">
                    <img src={props.imgUrl}></img>
                    
                    <div className="cart-card-details">
                        
                        <p className="cart-name">{props.name}</p>
                        <hr></hr>

                        <div style={{display:'flex',flexDirection:'row',alignItems:"center",marginTop:"20px",marginBottom:"10px"}}>
                            
                            <input type="number" placeholder="1"></input>
                            <p style={{position:'relative',left:"12%",color:"gold"}}>Pax</p>
                            <p className="cart-price">RM {props.price.toFixed(2)} Each</p>
                        </div>
                        
                        <p className="cart-price-total">TOTAL : RM {props.price.toFixed(2)}</p>
                    </div>
                    
                </div>

            </div>
            
        </>
    );
}

function Cart(){
    return(
        <>
            <div className="page-container">
                <div className="page-title">
                    <h1>My Cart</h1>
                    <hr></hr>
                </div>
                
                <div className="cart-page">
                    <div className="checkbox-all">
                        <input type="checkbox"></input>
                        <p>Select All</p>
                    </div>
                    
                    <CartItem imgUrl={Product[0].imgUrl} name={Product[0].name} quantity={1} price={Product[0].price}></CartItem>
                    <CartItem imgUrl={Product[0].imgUrl} name={Product[0].name} quantity={1} price={Product[0].price}></CartItem>
                    
                    <div className="cart-total-section">
                        <label>TOTAL </label>
                        <p>RM 12.00</p>
                    </div>

                    <button className="checkout-button">CHECKOUT</button>
                </div>
            

            </div>
        </>
    );
}

export default Cart