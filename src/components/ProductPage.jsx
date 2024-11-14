import { useParams } from "react-router-dom";
import "../style/ProductPage.css"
import { styled } from '@mui/material/styles';
import { Product } from "./Product";
import Rating from '@mui/material/Rating';
import LinearProgress,{linearProgressClasses} from '@mui/material/LinearProgress';

function Specs_item(props){

    return(
        <>  
            <div className="specs-item" >
                <p style={{minWidth:"20%",backgroundColor:"black",color:"white",borderRadius:"30px",textAlign:"center",paddingInline:"5%",position:"relative",left:"-5%",bottom:"-3px"}}>{props.name}</p>
                <p style={{marginLeft:"20%"}}>{props.value}</p>
            </div>
        </>
    );

}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width:300,
    height: 10,
    borderRadius: 5,
    alignSelf:"center",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));

function Review_Specs(props){

    return(
        <>
            <div className="review-specs">
                <div className="review-tag">
                    {props.name}
                </div>

                <div style={{alignSelf:"center",display:'flex',flexDirection:"column"}}>
                    <p style={{color:"green",fontSize:"24px"}}>Impressive</p>
                    <BorderLinearProgress variant="determinate" value={80}></BorderLinearProgress>
                </div>
            </div>
        </>
    );

}

function UserComment(props){
    return(
        <>
            <div className="comment-container">
                <div className="comment-rating">
                    <p>Human one</p>
                    <Rating value={props.value} readOnly></Rating>
                </div>
                
                <p className="comment-desc">{props.desc}</p>
            </div>
        </>
    )
}


function ProductPage(){

    const {id} = useParams();
    const product = Product[id-1];

    return(
        <>
            <div className="product-page-container">
                
                <div className="product-page-card">
                    <div className="product-gallery">
                    <button className="button-back">Back</button>
                        <img className="product-page-image" src={product.imgUrl}></img>

                        <div className="product-gallery-container">
                            <img className="product-page-image" src={product.imgUrl}></img>
                            <img className="product-page-image" src={product.imgUrl}></img>
                            <img className="product-page-image" src={product.imgUrl}></img>
                            <img className="product-page-image" src={product.imgUrl}></img>
                            <img className="product-page-image" src={product.imgUrl}></img>
                            <img className="product-page-image" src={product.imgUrl}></img>
                        </div>
                    </div>

                    <div className="product-page-info">
                        
                        <div className="product-info-header">
                            <p className="product-info-name">{product.name}</p>
                            <p className="product-info-type">{product.type}</p>
                            <hr></hr>
                        </div>

                        <p className="product-info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus libero rerum ipsum voluptate accusantium delectus laborum, aliquam ratione quasi excepturi recusandae itaque, ut nulla. Modi iure tempora dolor laboriosam.</p>
                        <div className="product-page-function">
                            <svg width="100%" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"/></svg>
                            <svg width="100%" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.5C9 12.8807 7.88071 14 6.5 14C5.11929 14 4 12.8807 4 11.5C4 10.1193 5.11929 9 6.5 9C7.88071 9 9 10.1193 9 11.5Z" stroke="#1C274C" stroke-width="1.5"/>
                                <path opacity="0.5" d="M14.3206 16.8017L9 13.29" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <path opacity="0.5" d="M14.4207 6.83984L9.1001 10.3515" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" stroke="#1C274C" stroke-width="1.5"/>
                                <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="#1C274C" stroke-width="1.5"/>
                            </svg>
                        </div>
                        <p style={{textAlign:"left",fontWeight:"bold",fontSize:"30px",margin:"50px 0px -20px 5%"}}>Now At,</p>
                        <p className="product-info-price">RM {product.price.toFixed(2)}</p>

                        <button className="product-page-card-button">Buy Now</button>
                        <p>More Desc Below</p>
                    </div>

                    
                </div>

                <div className="page-section">
                    <p className="section-heading">Specifications</p>
                    <Specs_item name="Weight" value="100g"></Specs_item>
                    <Specs_item name="Fresh Before" value="20 Days"></Specs_item>
                    <Specs_item name="Ingredient" value="Banana, Sugar, Salt, Drugs"></Specs_item>
                </div>

                <div className="page-section">
                    <p className="section-heading">Rating & Review</p>
                    
                    <div className="review-container">                           
                        
                        <div style={{display:"flex",flexDirection:"row",width:"100%"}}>
                            <div className="review-score">
                                <p className="review-score-value">4.0</p>
                                <div className="rating">
                                    <p className="review-score-comment" >Overall Great !</p>
                                    <Rating size="large" value={4}readOnly></Rating>
                                </div>
                                
                            </div>

                            

                            <div className="review-score-overall">
                                <Review_Specs name="Taste"></Review_Specs>
                                <Review_Specs name="Freshness"></Review_Specs>
                                <Review_Specs name="Appearance"></Review_Specs>
                            </div>
                        </div>

                        <button>Write Review</button>
                    </div>

                    <div className="comment-section">
                        <h1>User Review</h1>
                        
                        <UserComment value={5} desc="Feels like living in amazon"></UserComment>
                        <UserComment value={3} desc="Amateur"></UserComment>
                        <UserComment value={2} desc="Like drinking ubat batuk"></UserComment>
                        <button>Expand More</button>
                    </div>
                </div>
                
                <div className="add-cart">
                    <p>Add To Cart</p>
                    <button>+</button>
                    <div>0</div>
                    <button>-</button>
                </div>
            </div>
        </>
    );
}

export default ProductPage