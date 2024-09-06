import "../style/productCard.css"

function ProductCard(props){

    const style = {
        backgroundImage :"url('"+props.imgUrl+"')",
    };

    return(
        <>
            <div className="product-card-container" style={style}>
                
                <div className="product-card-details">
                    <p className="product-name">{props.name}</p>
                    <p className="product-price">RM {props.price.toFixed(2)}</p>
                    <p className="product-tag">{props.type}</p>
                </div>
                
            </div>
        </>
    );

    
}

export default ProductCard;