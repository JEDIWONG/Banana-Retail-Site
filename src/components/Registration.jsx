import "../style/Registration.css"

function showDateInput(){
    const a = document.getElementById("input-date");
    a.type = "date";
}

function showTextInput(){
    const a = document.getElementById("input-date");
    a.type = "text";
}

function Registration(){

    return(
        <>
            <div className="registration-container">
                <p style={{textAlign:"center",fontSize:"42px",fontWeight:"bold",marginBottom:"30px"}}>Sign Up</p>
                <hr style={{width:"80%",height:"5px",backgroundColor:"gold",border:"none",marginBottom:"50px"}}></hr>
                <div className="registration-details">
                    <div style={{display:"flex",flexDirection:"row", width:"105%"}}>
                        <input type="text" placeholder="First Name"></input>
                        <input type="text" placeholder="Last Name" style={{marginLeft:"5%"}}></input>
                    </div>

                    <input type="tel" placeholder="Mobile Number"></input>

                    <div style={{display:"flex",flexDirection:"row",width:"105%"}}>
                        
                        <input type="text" id="input-date" onFocus={showDateInput} onBlur={showTextInput} placeholder="Date of Birth"></input>
                    
                        <select style={{marginLeft:"5%",paddingInline:"4%"}}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    
                    <input name="username" type="text" placeholder="Username"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>

                </div>
                
                <button>Register</button>

            </div>
        </>
    );
}

export default Registration 