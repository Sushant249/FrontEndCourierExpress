import { Link, Outlet } from "react-router-dom";
import Footer from "../HomePage/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();

  const sessionClose = () => {

    sessionStorage.setItem("adminUser", "");

  };

  useEffect(() => {

    let adminvalidate = sessionStorage.getItem("adminUser");
    if(adminvalidate=="")
    {
      navigate("/Login");
    }

    

 }, []);

  return (
    <>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid ms-5">
          <a class="navbar-brand" href="#">Welcome {sessionStorage.getItem("admin")}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav">

              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Admin/Register" >RegisterUser</Link>
              </li>


              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Admin/ViewUsers" >ViewUsers</Link>
              </li>
              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Admin/ViewEmployees" >ViewEmployees</Link>
              </li>
              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Admin/ViewDeliveryboys" >ViewDeliveryboys</Link>
              </li>

              <li class="nav-item mt-1 ms-5">
                <Link to="/">

                  <button type="button" class=" btn btn-danger btn-sm" onClick={sessionClose}>Logout</button></Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <Outlet />
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      <Footer></Footer>
    </>
  );
};
export default AdminLayout;