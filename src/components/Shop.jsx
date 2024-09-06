import "../style/Shop.css"
import VerticalTabs from "./VerticalTabs";

function Shop(){

    return(
        <>
            <div className="page-container" style={{marginBottom:"200px"}}>

                <div className="page-title">
                    <h1>Catalogue</h1>
                    <hr></hr>

                    <div className="shop-search-bar">
                        <input type="search" className="shop-search" placeholder="Search"></input>
                        <button className="shop-search-button">Search</button>
                    </div>
                    
                </div>

                <div className="shop-product-container">
                    <VerticalTabs></VerticalTabs>
                </div>
                
                
            </div>
        </>
    );
}

export default Shop 