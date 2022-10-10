import { Link, Outlet } from "react-router-dom";
import Footer from "../HomePage/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function DboyLayout() {
  const navigate = useNavigate();
  const sessionClose = () => {

    sessionStorage.setItem("dboyUser", "");

  };

  useEffect(() => {

    let adminvalidate = sessionStorage.getItem("dboyUser");
    if(adminvalidate=="")
    {
      navigate("/Login");
    }

    

 }, []);



  return (<>
    <div style={{
      backgroundImage: `url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?cs=srgb&dl=pexels-hasan-albari-1229861.jpg&fm=jpg")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',

    }}>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white ms-5" href="#">Welcome {sessionStorage.getItem("dby")}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav ms-5">

              <li class="nav-item mt-1 ms-5">
                <Link class="nav-link" to="/Dboy/" >Courier Information</Link>
              </li>

              <li class="nav-item mt-1 ms-5">
                <Link class="nav-link" to="/Dboy/DboyProfile" >View Profile</Link>
              </li>

              <li class="nav-item ms-5">
                <Link to="/">

                  <button type="button" class=" btn btn-danger btn-md" onClick={sessionClose}>Logout</button></Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <Outlet />
      <br></br>
      <br></br>


    </div>
    <Footer />
  </>
  );
};
export default DboyLayout;