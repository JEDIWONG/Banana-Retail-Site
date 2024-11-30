import { Link } from "react-router-dom"
import "../style/ObjCard.css"

function ObjCard(props){
    return(
        <>
            <div className="obj-card">
                <img src={props.img}></img>
                <div className="obj-card-details">
                    <div>
                        <h1 className="obj-card-title">{props.title}</h1>
                        <p className="obj-card-desc">{props.desc}</p>
                    </div>
                    
                    <button className="btn-filled">
                        <Link className="link" to={props.url}>
                            {props.btnText}
                        </Link>
                    </button>
                </div>
                
            </div>  
        </>
    )
}

export default ObjCard