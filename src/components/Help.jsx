import "../style/Help.css";
import * as React from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import acc_icon from "../assets/account.svg";
import { Button } from "@mui/material";


function Help(){

    const Mui_Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&::before': {
          display: 'none',
        },
      }));
      
      const Mui_AccordionSummary = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        backgroundColor: 'rgba(255, 255, 255)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
          marginLeft: theme.spacing(3),

        },
        ...theme.applyStyles('light', {
          backgroundColor: 'rgba(255, 255, 255)',
          
        }),
      }));
      
      const Mui_AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(5),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
      }));

    function HelpAccordion(props){

        const [expanded, setExpanded] = React.useState('');

        const handleChange = (panel) => (event, newExpanded) => {
          setExpanded(newExpanded ? panel : false);
        };

        return(
            <>     
                <Mui_Accordion sx={{boxShadow:"3px 3px 3px grey"}} expanded={expanded === props.order} onChange={handleChange(props.order)}>
                    <Mui_AccordionSummary >
                    <Typography sx={{fontSize:"22px",paddingInline:"1%"}}>{props.title}</Typography>
                    </Mui_AccordionSummary>
                    <Mui_AccordionDetails>
                    <Typography>
                        {props.desc}
                    </Typography>
                    </Mui_AccordionDetails>
                </Mui_Accordion>
            </>
        )
    };

    function Help_Card(props){
      return(
        <>
          <div className="help-card">
              <img src={props.img}></img>
              <p className="help-card-title">{props.title}</p>   
              <hr></hr>         
          </div>
        </>
      );
    }

    function Guide_Point(props){

      return(
        <>
          <Mui_Accordion className="guide-point"  >
              <Mui_AccordionSummary sx={{borderLeft: "3px solid goldenrod"}}>
                <Typography className="guide-point-title" sx={{fontSize:"24px"}}>{props.title}</Typography>
              </Mui_AccordionSummary>
              <Mui_AccordionDetails>
              <Typography className="guide-point-desc">
                  {props.desc}
              </Typography>
              </Mui_AccordionDetails>
          </Mui_Accordion>

        </>
      );
    }

    return(
        <>
            <div className="page-container" >

            <div className="page-title">
                <h1>Help & Guide</h1>
                <hr></hr>
                <h3 style={{fontStyle:"italic"}}>“How Can We Help You”</h3>
            </div>

            <div className="page-section" style={{marginTop:"0px",paddingTop:"30px"}}>

                <div className="text-title">
                  <p>|</p>
                  <h1>General Guide</h1>
                </div>

                <div className="help-card-container">
                  <Help_Card title="Account" img={acc_icon}></Help_Card>
                  <Help_Card title="Payment" img={acc_icon}></Help_Card>
                  <Help_Card title="Shipping" img={acc_icon}></Help_Card>
                </div>

                <div style={{display:"flex",flexDirection:"row",position:"relative",left:"45%",top:"30px"}}>
                  Select One or Go To 
                  <div style={{color:"aqua",textDecoration:"underline 2px solid",marginInline:"5px"}}>
                    FAQ
                  </div> 
                  Section
                </div>

                <div className="guide-desc-container">
                  
                  <Guide_Point title="How to register an account ?" desc="Use your hand..."></Guide_Point>
                  <Guide_Point title="How to register an account ?" desc="Use your hand..."></Guide_Point>
                  <Guide_Point title="How to register an account ?" desc="Use your hand..."></Guide_Point>
                           
                </div>

                <Button variant="contained" sx={{position:"relative",left:"45%",top:"10px"}}>Expand More</Button>
              
            </div>

            <div className="page-section">

              <div className="section-heading">Frequently Asked Question (FAQ)</div>
              <div className="faq-accordion-container">
                <HelpAccordion title="Why Banana All The Way" desc="Cause a banana a day keeps the doctor away"></HelpAccordion>
                <HelpAccordion title="Why Banana All The Way" desc="Cause a banana a day keeps the doctor away"></HelpAccordion>
                <HelpAccordion title="Why Banana All The Way" desc="Cause a banana a day keeps the doctor away"></HelpAccordion>
              </div>
            </div>

            <div className="page-section" style={{display:"flex",flexDirection:"row",paddingBlock:"20px"}}>

              <p style={{padding:"1% 3%",fontSize:"20px",borderBottom:"3px solid goldenrod",marginInline:"10%"}}>Need More Assistance ?</p>
              <Button variant="contained" sx={{height:"40px",alignSelf:"center"}}>Contact Us</Button>
            </div>

            </div>
        </>
    );
}

export default Help 