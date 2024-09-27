
import img01 from "../assets/product_01.jpg";
import img02 from "../assets/product_02.jpg";
import img03 from "../assets/product_03.jpg";
import "../style/ImageCarousel.css"
import { useEffect, useState } from "react";

const descArr = [["Banana Milk Shake","Never Try Never Know"],["Banana Yogurt","Hope Toilet Not Far From You"],["Banana Ice Cream","Special On This Summer"]]; 
const imgArr = [img01,img02,img03];

function ImageCarousel(){

    const [desc,setDesc] = useState(descArr[0]);
    const [Img,setImg] = useState(imgArr[0]);
    const [index,setIndex] = useState(0);
    

    const nx_img=()=>{
        if(index<2){
            setIndex(index+1);
            setImg(imgArr[index+1]);
        }
    }

    function prev_img(){
        if(index>0){
            setIndex(index-1);
            setImg(imgArr[index-1]);
        }
    }

    function toimg(n){
    
        let dot = document.querySelectorAll(".pagination-button");

       setImg(imgArr[n]);

        dot.forEach(element => {
            element.classList = "pagination-button";
            
        });

       dot[n].classList = "active-pagination-button";
    }

    return(
        <>

            <div className="carousel-container">    
                
                <h3>“ More Than Just Bananas ”</h3>
                <div className="carousel-img-container">
                    <p class="prev" onClick={prev_img}>&#10094;</p>
                    <img className="carousel-img" src={Img}></img>
                    <p className="next" onClick={nx_img}>&#10095;</p>
                </div>

                <div className="pagination-container">
                    <h2>{desc[0]}</h2>
                    <div className="pagination-button-group">
                        <span className='pagination-button' style={{backgroundColor:"white"}} onClick={()=>toimg(0)}></span>
                        <span className='pagination-button' onClick={()=>toimg(1)}></span>
                        <span className='pagination-button' onClick={()=>toimg(2)}></span>
                    </div>                 
                </div>
            </div>

        </>
        
    )
    
}

export default ImageCarousel;