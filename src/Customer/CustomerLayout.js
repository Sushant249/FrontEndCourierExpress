

import { Link, Outlet } from "react-router-dom";
import Footer from "../HomePage/Footer";
import CustomerHome from "./CustomerHome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function CustomerLayout() {
  const navigate = useNavigate();
  const sessionClose = () => {

    sessionStorage.setItem("customerEmail", "");

  };

  useEffect(() => {

    let adminvalidate = sessionStorage.getItem("customerEmail");
    if(adminvalidate=="")
    {
      navigate("/CustomerLogin");
    }

    

 }, []);

  return (
    <>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand ms-5" href="/Customer">Welcome {sessionStorage.getItem("cust")}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav">

              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Customer/CourierBooking">CourierBooking</Link>
              </li>


              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Customer/CourierTracking">ViewCourierStatus</Link>
              </li>
              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Customer/UpdateBookingDetails" >Update</Link>
              </li>
              {/* <li class="nav-item mt-2 ms-5" >
                <Link class="nav-link" to="/Customer/CustomerFeedback" >Feedback</Link>
              </li> */}
              <li class="nav-item mt-1 ms-5">
                <Link to="/">

                  <button type="button" class=" btn btn-danger btn-sm" onClick={sessionClose}>Logout</button></Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>




      <Outlet />
      {/* <CustomerHome />
      <Footer /> */}
      <Footer />

    </>
  );
};
export default CustomerLayout;