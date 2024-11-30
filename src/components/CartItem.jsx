import "../style/CartItem.css"

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
                            <p style={{position:'relative',left:"12%"}}>Pax</p>
                            <p className="cart-price">RM {props.price.toFixed(2)} Each</p>
                        </div>
                        
                        <p className="cart-price-total">TOTAL : RM {props.price.toFixed(2)}</p>
                    </div>
                    
                </div>

            </div>
            
        </>
    );
}

export default CartItem 