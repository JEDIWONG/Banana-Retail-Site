import { Product } from "./Product";
import "../style/ImageCarousel.css"
import { useEffect, useState } from "react";

const descArr = [Product[3].name,Product[4].name,Product[5].name]
const imgArr = [Product[3].imgUrl,Product[4].imgUrl,Product[5].imgUrl];

function ImageCarousel(){

    const [desc,setDesc] = useState(descArr[0]);
    const [Img,setImg] = useState(imgArr[0]);
    const [index,setIndex] = useState(0);
    

    const nx_img=()=>{
        if(index<2){
            setIndex(index+1);
            setDesc(descArr[index+1]);
            setImg(imgArr[index+1]);
        }
    }

    function prev_img(){
        if(index>0){
            setIndex(index-1);
            setDesc(descArr[index-1]);
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
                    <span className='pagination-button' style={{backgroundColor:"gold"}} onClick={()=>toimg(0)}></span>
                    <span className='pagination-button' onClick={()=>toimg(1)}></span>
                    <span className='pagination-button' onClick={()=>toimg(2)}></span>
                </div>
            </div>

        </>
        
    )
    
}

export default ImageCarousel;