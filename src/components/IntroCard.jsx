import "../style/IntroCard.css"

function IntroCard(props){

    return(
        <>
            <div className="intro-card-container">

                <div className="intro-card-details">
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                    <div className="intro-button-bar">
                        <button className="btn-filled">Shop</button>
                        <button className="btn-outlined">About</button>
                    </div>
                </div>
                
                <img src={props.imgUrl}></img>
            </div>
        </>
    )
}

export default IntroCard