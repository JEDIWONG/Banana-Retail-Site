import "../style/Help.css";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function Help(){

    function HelpAccordion(props){
        return(
            <>
                <div>
                    <Accordion sx={{margin:"10px"}}>
                        <AccordionSummary
                            expandIcon=""
                        >
                        <Typography sx={{fontWeight:"bold"}}>{props.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {props.desc}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>       
            </>
        )
    };

    return(
        <>
            <div className="page-container" >

            <div className="page-title">
                <h1>FAQ</h1>
                <hr></hr>
                    
            </div>

            <div className="faq-accordion-container">
                <HelpAccordion title="1. Why Banana All The Way" desc="Cause a banana a day keeps the doctor away"></HelpAccordion>
                <HelpAccordion title="1. Why Banana All The Way" desc="Cause a banana a day keeps the doctor away"></HelpAccordion>
                <HelpAccordion title="1. Why Banana All The Way" desc="Cause a banana a day keeps the doctor away"></HelpAccordion>
            </div>
            </div>
        </>
    );
}

export default Help 