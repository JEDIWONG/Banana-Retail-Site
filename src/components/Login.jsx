import "../style/Login.css"
import { Link } from "react-router-dom";

function Login(){

    return(
        <>
            <div className="login-page-container">
                <p>Sign In</p>
                <hr></hr>

                <div className="login-details">
                    <input type="text" placeholder="Username Or Email"></input>
                    <input type="password" placeholder="Password"></input>

                    <div style={{display:"flex",flexDirection:"row"}}>
                        <input style={{width:"20%",height:"20px",boxShadow:"none"}} type="checkbox"></input>
                        <label style={{width:"100%",textAlign:"left",marginTop:"5px",fontSize:"16px"}}> Remember Me</label>
                    </div>
                </div>

                <button>Login</button>

                <div className="login-alt">
                    <p>No Yet Have An Account?</p>
                    <Link to="../Registration" style={{marginLeft:"10px"}}>Register Here</Link>
                </div>
            </div>
        </>
    );
}

export default Login 