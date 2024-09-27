import "../style/LocateUs.css"
import random_map from "../assets/random_map.jpg";
import { MenuItem, Select ,FormControl,InputLabel} from "@mui/material";
import * as React from 'react';

function BranchCard(props){
    return(
        <>
            <div className="location-card">
                <img className="location-card-img" src={props.img}></img>

                <div style={{paddingInline:"3%"}}>

                    <p className="location-card-city">{props.city}</p>
                    <p className="location-card-addr">{props.addr}</p>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <p>Tel :</p>
                        <p className="location-card-phone" > {props.phone}</p>
                    </div>

                </div>
                
                
            </div>
        </>
    );
}

function LocateUs(){

    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };

    return(
        <>

        <div className="page-container">
            <div className="page-title">
                <h1>
                    Find Us At
                </h1>

                <hr></hr>

                <FormControl variant="filled" sx={{ m: 1, width :"25%"}}>
                    <InputLabel id="demo-simple-select-filled-label">State</InputLabel>
                    <Select 
                        onChange={handleChange}
                        value={state}
                        label="State"
                        style={{height:"60px",textAlign:"left",borderRadius:"10px",backgroundColor:"white",boxShadow:"0px 5px 10px black",paddingLeft:"8%",fontWeight:"bold",fontSize:"20px"}}
                    >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                        <MenuItem value={1}>Perak</MenuItem>
                        <MenuItem value={2}>Pahang</MenuItem>
                        <MenuItem value={3}>Kuala Lumpur</MenuItem>
                        <MenuItem value={4}>Sarawak</MenuItem>
                    </Select>
                </FormControl>

            </div>

            <div className="page-section" style={{backgroundColor:"rgb(0,0,0,0.9)"}}>

                <h1 style={{color:"goldenrod",width:"30%",marginLeft:"35%",fontSize:"60px",paddingTop:"50px",borderBottom:"8px double goldenrod",paddingBottom:"20px"}}>Our Branch</h1>
                <div style={{display:"flex",flexDirection:"row",marginBottom:"0px",marginTop:"5px",marginLeft:"10%",color:"goldenrod"}}>
                    <h3>Operation Hour (Across State):</h3>
                    <p style={{alignContent:"center",marginLeft:"3%"}}>8.00 A.M - 9.00 P.M</p>
                </div>

                <div className="location-group-container">
                    <p className="section-heading" style={{right:"30%",width:"20%",marginBottom:"0px"}}>Perak</p>
                    
                    <div style={{display:"flex",flexDirection:"row"}}> 
                        <BranchCard img={random_map} city="Ipoh" addr="No 69, Persiaran SinKah 12, Tasek, 25200" phone="05-12346969"></BranchCard>
                        <BranchCard img={random_map} city="Kampar" addr="No 12, Persiaran LouShui, Taman An Ning, 1300177" phone="05-12346969"></BranchCard>
                    </div>
                </div>

                <div className="location-group-container">
                    <p className="section-heading" style={{right:"30%",width:"20%",marginBottom:"0px"}}>Pahang</p>
                    
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <BranchCard img={random_map} city="Cameron Highland" addr="No 69, Lorong Hitam 13, Jalan Strawbery, 25300" phone="05-12346969"></BranchCard>
                        <BranchCard img={random_map} city="Kuantan" addr="No 99, Lorong Muhibah 12, Indera Mahkota, 25300" phone="05-12346969"></BranchCard>
                    </div>
                </div>

                <div className="location-group-container">
                    <p className="section-heading" style={{right:"30%",width:"20%",marginBottom:"0px"}}>Kuala Lumpur</p>
                    
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <BranchCard img={random_map} city="Petaling Jaya" addr="No 520, Lorong Sri Petaling 32, Jalan Besar, 10010" phone="05-12346969"></BranchCard>
                    </div>
                </div>

                <div className="location-group-container">
                    <p className="section-heading" style={{right:"30%",width:"20%",marginBottom:"0px"}}>Sarawak</p>
                    
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <BranchCard img={random_map} city="Sibu" addr="No 520, Lorong Lada Hitam 22, Jalan Ensurai, 25300" phone="05-12346969"></BranchCard>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );

}

export default LocateUs;