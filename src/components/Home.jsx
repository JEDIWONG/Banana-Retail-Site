import "../style/Home.css"
import exp from "../assets/placeholder_01.jpg";
import ImageCarousel from "./ImageCarousel";

function Home() {
    
  return (
    <>
        <div className="page-container">

            <ImageCarousel></ImageCarousel>
            
        
            <div className="page-section" style={{backgroundColor:"rgb(255,255,205,0.9)"}}>
                <div className="section-heading">What We Provides</div>
                
                <div className="home-section-card">
                    <img src={exp}></img>
                    <div className="home-section-details">
                        <div className="section-heading-2">Fresh Banana</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus maiores minima, dolores natus rerum laudantium animi error doloribus. Mollitia odio, eaque aliquid neque eum quasi. Omnis reiciendis dolor saepe ullam?</p>
                        <button className="home-button">Shop Now</button>
                    </div>
                </div>

                <div className="home-section-card">
                    <img src={exp}></img>
                    <div className="home-section-details">
                        <div className="section-heading-2">Subscription Service</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus maiores minima, dolores natus rerum laudantium animi error doloribus. Mollitia odio, eaque aliquid neque eum quasi. Omnis reiciendis dolor saepe ullam?</p>
                        <button className="home-button">Learn More</button>
                    </div>
                </div>

            </div>

            <div className="home-section">

                <h1 className="section-heading">Why Us ?</h1>

                <div style={{display:"flex",flexDirection:"row",marginLeft:"15%",marginTop:"50px"}}>

                    <div className="home-why-card"> 

                        <svg fill="#0091ff" width="100%" height="150px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.22182541,19.7781746 C3.29761276,18.8539619 3.03246659,17.4441845 3.32230899,15.5944173 C1.80937652,14.4913839 1,13.3070341 1,12 C1,10.6929659 1.80937652,9.50861611 3.32230899,8.40558269 C3.03246659,6.55581547 3.29761276,5.14603806 4.22182541,4.22182541 C5.14603806,3.29761276 6.55581547,3.03246659 8.40558269,3.32230899 C9.50861611,1.80937652 10.6929659,1 12,1 C13.3070341,1 14.4913839,1.80937652 15.5944173,3.32230899 C17.4441845,3.03246659 18.8539619,3.29761276 19.7781746,4.22182541 C20.7023872,5.14603806 20.9675334,6.55581547 20.677691,8.40558269 C22.1906235,9.50861611 23,10.6929659 23,12 C23,13.3070341 22.1906235,14.4913839 20.677691,15.5944173 C20.9675334,17.4441845 20.7023872,18.8539619 19.7781746,19.7781746 C18.8539619,20.7023872 17.4441845,20.9675334 15.5944173,20.677691 C14.4913839,22.1906235 13.3070341,23 12,23 C10.6929659,23 9.50861611,22.1906235 8.40558269,20.677691 C6.55581547,20.9675334 5.14603806,20.7023872 4.22182541,19.7781746 Z M8.65258332,18.5979847 C9.05851175,18.5110507 9.47593822,18.6839544 9.70150129,19.0324608 C10.582262,20.3932808 11.3676332,21 12,21 C12.6323668,21 13.417738,20.3932808 14.2984987,19.0324608 C14.5240618,18.6839544 14.9414883,18.5110507 15.3474167,18.5979847 C16.9324536,18.9374379 17.9168102,18.8111119 18.363961,18.363961 C18.8111119,17.9168102 18.9374379,16.9324536 18.5979847,15.3474167 C18.5110507,14.9414883 18.6839544,14.5240618 19.0324608,14.2984987 C20.3932808,13.417738 21,12.6323668 21,12 C21,11.3676332 20.3932808,10.582262 19.0324608,9.70150129 C18.6839544,9.47593822 18.5110507,9.05851175 18.5979847,8.65258332 C18.9374379,7.06754643 18.8111119,6.08318982 18.363961,5.63603897 C17.9168102,5.18888812 16.9324536,5.06256208 15.3474167,5.40201528 C14.9414883,5.48894934 14.5240618,5.31604564 14.2984987,4.96753923 C13.417738,3.60671924 12.6323668,3 12,3 C11.3676332,3 10.582262,3.60671924 9.70150129,4.96753923 C9.47593822,5.31604564 9.05851175,5.48894934 8.65258332,5.40201528 C7.06754643,5.06256208 6.08318982,5.18888812 5.63603897,5.63603897 C5.18888812,6.08318982 5.06256208,7.06754643 5.40201528,8.65258332 C5.48894934,9.05851175 5.31604564,9.47593822 4.96753923,9.70150129 C3.60671924,10.582262 3,11.3676332 3,12 C3,12.6323668 3.60671924,13.417738 4.96753923,14.2984987 C5.31604564,14.5240618 5.48894934,14.9414883 5.40201528,15.3474167 C5.06256208,16.9324536 5.18888812,17.9168102 5.63603897,18.363961 C6.08318982,18.8111119 7.06754643,18.9374379 8.65258332,18.5979847 Z M11,12.5857864 L15.2928932,8.29289322 L16.7071068,9.70710678 L11,15.4142136 L7.29289322,11.7071068 L8.70710678,10.2928932 L11,12.5857864 Z"/>
                        </svg>
                        <p>
                            Verified
                        </p>
                    </div>

                    <div className="home-why-card"> 

                        <svg  width="100%" height="150px" viewBox="-19.2 -19.2 230.40 230.40" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.152"/>

                        <g id="SVGRepo_iconCarrier">

                        <path stroke="#0091ff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="14.592000000000002" d="M95.958 22C121.031 42.867 149.785 42 158 42c-1.797 118.676-15 95-62.042 128C49 137 35.798 160.676 34 42c8.13 0 36.883.867 61.958-20Z"/>

                        </g>

                        </svg>

                        <p>
                            Trusted
                        </p>
                    </div>

                    <div className="home-why-card"> 
                        <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="150px" viewBox="0 0 512 512" xml:space="preserve" fill="#00b3ff" stroke="#00b3ff">

                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                            <g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M484.5,327.114c16.188-6.984,27.5-23.047,27.5-41.781c0-19.25-11.969-35.625-28.859-42.297 c9.891-8.359,16.281-20.672,16.281-34.625c0-25.172-20.391-45.563-45.547-45.563H350.063c9.969-19.625,18.625-45.563,15.672-76.594 c-2.766-29.203-27.391-80.828-65.359-83.875c-29.25-2.344-34.906,8.625-34.906,37.969c0,0,0.328,28.422,0.328,46.641 c0,32.641-10.859,49.25-49.234,76.766c-50.625,36.297-59.406,55.031-59.406,55.031v216.672c0,27.219,22.063,49.281,49.281,49.281 h94.531h115.375c25.188,0,59.219-12.156,59.219-45.547c0-12.5-5.031-23.813-13.188-32.047 c22.031-3.188,39.016-21.969,39.016-44.891C501.391,348.021,494.734,335.474,484.5,327.114z"/> <path class="st0" d="M96.703,202.849H24.625C11.031,202.849,0,213.864,0,227.489v257.813c0,13.594,11.031,24.625,24.625,24.625 h72.078c13.609,0,24.641-11.031,24.641-24.625V227.489C121.344,213.864,110.313,202.849,96.703,202.849z M65.906,470.817 c-12.594,0-22.813-10.219-22.813-22.813s10.219-22.813,22.813-22.813c12.625,0,22.813,10.219,22.813,22.813 S78.531,470.817,65.906,470.817z"/> </g> </g>

                        </svg>
        
                        <p>
                            Quality
                        </p>
                    </div>

                </div>
                
            </div>

            <div className="home-section">
                <h1 className="section-heading">Join Us Today</h1>

                <div style={{display:"flex",flexDirection:"row",marginInline:"10%"}}>

                    <div className="home-member-card">
                        <h1>Free Tier</h1>
                        <ul>
                            <li>Without Any Charge</li>
                            <li>Nothing Special </li>
                            <li>No Free Banana</li>
                            <li>Upgradeable</li>
                        </ul>
                    </div>

                    <p style={{alignContent:"center",marginInline:"10%",fontSize:"32px"}}>OR</p>

                    <div className="home-member-card">
                        <h1>Membership</h1>
                        <ul>
                            <li>Weekly Banana Gift</li>
                            <li>Reasonable Charge</li>
                            <li>Tons Of Rewards</li>
                            <li>Cancel Anytime</li>
                        </ul>
                    </div>

                </div>
                
                <button className="home-button" style={{width:"30%",marginLeft:"35%",marginTop:"5%"}}>Register New Account Here</button>
            </div>

        </div>
    </>
  )
}

export default Home;