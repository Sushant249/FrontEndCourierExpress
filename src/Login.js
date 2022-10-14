import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, redirect, Link, useNavigate } from "react-router-dom";
// import imgicon from './images/LOGIN-KEY1.png';
// import "../CSS/login.css";
import swal from "sweetalert";


function Login() {

  const navigate = useNavigate();


  useEffect(() => {

    sessionStorage.setItem("EmployeeUser", "");
    sessionStorage.setItem("adminUser", "");
    sessionStorage.setItem("customerEmail", "");
    sessionStorage.setItem("dboyUser", "");
    document.title = "Login";
  }, []);




  let [uemail, setUemail] = useState("");
  let [upassword, setUpassword] = useState("");


  let uusernameinp = (e) => setUemail(e.target.value);
  let upasswordinp = (e) => setUpassword(e.target.value);


  let user = {
    email: uemail,
    password: upassword,
  };


  const checkUser = (data) => {
    console.log(data.email);

    axios.get(`http://localhost:8080/userlogin/${data.email}/${data.password}`).then(
      (response) => {
        console.log(response.data);
        if (response.data.role === "admin") {
          sessionStorage.setItem("adminUser", user.email);
          sessionStorage.setItem("admin", response.data.name);
          navigate("/Admin");
        }
        else if (response.data.role === "emp") {
          sessionStorage.setItem("EmployeeUser", user.email);
          sessionStorage.setItem("emp", response.data.name);
          navigate("/Employee");
        }
        else if (response.data.role === "dby") {
          sessionStorage.setItem("dboyUser", user.email);
          sessionStorage.setItem("dby", response.data.name);
          navigate("/Dboy");
        }

        else {
          swal("Error", "Please enter valid Credentials", "error");
        }
      },

      (error) => {
        console.log(error);

      }
    );
  };



  let validate = () => {

    if (uemail == "") {
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

  return (

    <div className="bg-light mw-100 " style={{
      backgroundColor: '#E1E8ED',
      height: "100%",
      // backgroundImage: `url("piccc1.jpg")`,
      // backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid ms-5">
          <a class="navbar-brand" href="#">Welcome </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav">


              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link btn btn-secondary" to="/" >Home</Link>
              </li>

              {/* <li class="nav-item mt-1 ms-5">
                <Link to="/">

                  <button type="button" class=" btn btn-danger btn-sm" onClick={sessionClose}>Logout</button></Link>
              </li> */}
            </ul>

          </div>
        </div>
      </nav>



      <h1 className="display-5"><b>User Login</b></h1>
      <form >
        <h3 className="text-center"><b>Username</b></h3>
        <div className="form-row justify-content-center">

          <input className=" form-control form-control-lg col-md-4 " id="email" type="text" name="email" value={uemail} placeholder="Enter Email-Id" onChange={uusernameinp} required />
          <span id="msg" ></span>
        </div>
        <h3 class="text-center"><b>Password</b></h3>
        <div className="form-row justify-content-center">

          <input className=" form-control form-control-lg col-md-4 justify-content-center" id="password" type="password" name="password" value={upassword} placeholder="Enter Password" onChange={upasswordinp} required />
          <span id="msg1"></span>
        </div>


        <div>
          <input className="btn btn-primary mb-2" id="Login" type="button" value="Login" onClick={validate} />
        </div>

        <div>
          <Link to='/UserForgotPassword' className="btn btn-link ">Forgot PassWord?</Link>
        </div>


        {/* <div className="col-md-12 text-center ">
          <Link to="/register">
            <p class="mb-0 fs-6 text-black">Don't have an account? Register Here </p></Link>

        </div> */}
      </form>
    </div >


  );

}


export default Login;