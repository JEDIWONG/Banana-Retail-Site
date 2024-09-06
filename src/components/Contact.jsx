import "../style/Contact.css"

function ContactCard(props){
    return(
        <>
            <div className="contact-card-container">
                <p className="contact-name">{props.name}</p>
                <p className="contact-link">{props.link}<hr></hr></p>
            </div>
        </>
    );
}

function Contact(){
    return(
        <>
            <div className="page-container">
                <h1 className="page-title">
                    Contact
                </h1>

                <div className="contact-page-content">
                    <ContactCard name="General Inquiries" link="info@banana.net"></ContactCard>
                    <ContactCard name="Bussiness Developement" link="buss@banana.net"></ContactCard>
                    <ContactCard name="Privacy Policy" link="pdpa@banana.net"></ContactCard>
                </div>

            </div>
        </>
    );
}

export default Contact