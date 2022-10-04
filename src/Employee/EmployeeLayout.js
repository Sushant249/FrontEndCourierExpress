
import { Link, Outlet } from "react-router-dom";
function EmployeeLayout() {

  const sessionClose = () => {

    sessionStorage.setItem("user", "");

  };


  return (
    < div className="text-dark">

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark"
      >
        <div class="container-fluid" >
          <a class="navbar-brand ms-5" href="/Employee">Welcome {sessionStorage.getItem("emp")}
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse col-12" id="collapsibleNavbar">


            <ul class="navbar-nav">


              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Employee/viewProfile" >ViewProfile</Link>
              </li>


              <li class="nav-item mt-2 ms-5" >
                <Link class="nav-link" to="/Employee/IncomingCouriers" >IncomingCouriers</Link>
              </li>
              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Employee/OutgoingCouriers" >OutgoingCouriers</Link>
              </li>
              <li class="nav-item mt-2 ms-5">
                <Link class="nav-link" to="/Employee/ViewDboys" >ViewDeliveryboys</Link>
              </li>

              <li className="nav-item mt-2 ms-5">
                <Link to="/">

                  <button type="button" className=" btn btn-danger btn-sm float-right col-12 " onClick={sessionClose}>Logout</button></Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <Outlet />

    </div>
  );
};
export default EmployeeLayout;