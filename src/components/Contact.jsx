import "../style/Contact.css"

function ContactCard(props){
    return(
        <>
            <div className="contact-card">
                <p className="contact-name">{props.name}</p>
                <p className="contact-desc">“{props.desc}”</p>
                <p className="contact-hp">{props.hp}</p>
                <p className="contact-link">{props.link}</p>
            </div>
        </>
    );
}

function Contact(){
    return(
        <>
            <div className="page-container">
                <div className="page-title">
                    <h1>Contact Us</h1>
                    <hr></hr>
                    <h3 style={{fontStyle:"italic"}}>Here How You Can Get In Touch With Us</h3>
                </div>
                
                <div className="contact-page">
                    
                    <div className="contact-card-container">
                        <ContactCard name="General Inquiries" hp="03-143728483" desc="Any Unspecific Question" link="info@banana.net"></ContactCard>
                        <ContactCard name="Bussiness Opportunity" desc="Seeking Out Bussiness Oppurtunity & Collab" link="bananan@gmail.com"></ContactCard>
                    </div>

                    <div className="contact-form">
                        <h1>Message Us Here</h1>
                        <input type="text" placeholder="Name"></input>
                        <input type="email" placeholder="Valid Email Address"></input>
                        <input type="text" placeholder="Message" style={{height:"200px"}}></input>
                        <button>Send Message</button>
                    </div>
                </div>
                

            </div>
        </>
    );
}

export default Contact