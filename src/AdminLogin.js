import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, redirect, Link, useNavigate } from "react-router-dom";


import swal from "sweetalert";



function AdminLogin() {

  const navigate = useNavigate();
    
    useEffect(() => {
      document.title = "Login";
    }, []);

    let [uemail, setUemail] = useState("");
    let [upassword, setUpassword] = useState("");

    
    let uusernameinp = (e) => setUemail(e.target.value);
    let upasswordinp = (e) => setUpassword(e.target.value);


    let user={
        email:uemail,
        password:upassword,
    };


    const checkUser = (data) => {
      console.log(data);
        axios.post(`http://localhost:8080/admin/adminlogin`, data).then(
          (response) => {
            console.log(response.data);
            if(response.data=="Admin")
            {
                navigate("/adminhomepage");
            }
            else
            {
              swal("Error", "Please enter valid Credentials", "error");
            }
          },
      
          (error) => {
            console.log(error);
            
          }
        );
      };



    let validate = () =>{

      if(uemail=="")
      {
        swal("Error", "Please enter email", "error");
        return false;
      }

     else if (uemail.indexOf("@") <= 0) {
        swal("Error", "Please enter valid email", "error");
        return false;
      } else if (
        uemail.charAt(uemail.length - 4) !== "." &&
        uemail.charAt(uemail.length - 3) !== "."
      ) {
        swal("Error", "Please enter valid email", "error");
        return false;
      } else if (upassword === "") {
        swal("Error", "Please enter password", "error");
        return false;
      } else if (upassword.length <= 5) {
        swal("Error", "Password must be atleast 6 character", "error");
        return false;

      }
        
        checkUser(user);
        
      }

return(

    <div >
    {/* <img src={imgicon1} className="bgimg"/>  */}
    <div className="Loginbox"> 
    {/* <img src={imgicon} class="LOGIN-KEY"/>  */}
    <h1>ADMIN LOGIN</h1>
    <form>
        <div>    
        <p class="text-start">Username</p>
        <input id="email" type="text"  name="email" value={uemail} placeholder="Enter Email-Id" onChange={uusernameinp} required/>   
        <span id="msg" ></span>  
        </div>

        <div>
        <p class="text-start">Password</p>
        <input id="password" type="password"  name="password" value={upassword} placeholder="Enter Password" onChange={upasswordinp} required/>
        <span id="msg1"></span>
        </div>
        
          <div>
              <p class="mb-2 text-center">Forget Password<a href="#!" class="text-white-50 fw-bold"></a>
              </p>
            </div>  

        <div>
        <input id="Login" type="button"  value="Login" onClick={validate}/>
        </div>


        <div className="col-md-12 text-center ">
          <Link to ="/register">
              <p class="mb-0 fs-6 text-black">Don't have an account? Register Here </p></Link>
             
            </div>
    </form>
  </div>
  </div>

  
);

}


export default AdminLogin;