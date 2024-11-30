import "../style/Cart.css"
import {Product} from "../model/Product.jsx"
import CartItem from "../components/CartItem.jsx";

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
                    <CartItem imgUrl={Product[2].imgUrl} name={Product[2].name} quantity={1} price={Product[2].price}></CartItem>
                    
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