import "../style/About.css"
import about02 from "../assets/about02.jpg"

function About(){
    return(
        <>
            <div className="page-container">
                <h1 className="page-title">About Us</h1>

                <div className="about-history">    
                    <div className="about-img"></div>
                    <div className="about-history-detail">

                        <p className="about-history-title">
                            Who Are We ? 
                        </p>

                        
                        <p className="about-history-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, necessitatibus eaque quibusdam amet, numquam maiores similique nihil culpa iusto esse in ab rem dolor atque quos nemo quod a assumenda.</p>
                    </div>
                </div>

                <div className="about-section-1">
                    <img src={about02}></img>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore possimus tenetur cupiditate ut suscipit veritatis omnis vel velit voluptatibus et, consequuntur ea, dolorem, delectus iure nam voluptatem? Necessitatibus, cupiditate maiores.</p>
                </div>

                <div className="about-section-1">
                    <p style={{borderRadius:"20px 0px 0px 20px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore possimus tenetur cupiditate ut suscipit veritatis omnis vel velit voluptatibus et, consequuntur ea, dolorem, delectus iure nam voluptatem? Necessitatibus, cupiditate maiores.</p>
                    <img src={about02}></img>
                </div>
            </div>
        </>
    );
}

export default About