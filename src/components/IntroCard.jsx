import { Link } from "react-router-dom"
import "../style/IntroCard.css"

function IntroCard(props){

    return(
        <>
            <div className="intro-card-container">

                <div className="intro-card-details">
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                    <div className="intro-button-bar">

                        <button className="btn-filled">
                            <Link className="link" to="shop/">
                                Shop
                            </Link>
                        </button>
                        
                        
                        <button className="btn-outlined">

                            <Link className="link" to="about/">
                                About
                            </Link>
                        </button>
                    </div>
                </div>
                
                <img src={props.imgUrl}></img>
            </div>
        </>
    )
}

export default IntroCard