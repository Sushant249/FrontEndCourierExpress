
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Navigate, redirect, useNavigate } from "react-router-dom";


const CustomerRegister = () => {

  const navigate = useNavigate();

  let [uconpassword, setUconpassword] = useState("");
  let uconpasswordinp = (e) => setUconpassword(e.target.value);

  const [inputs, setInputs] = useState({});

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const checkEmail = (data) => {
    //evnt.preventDefault();
    alert(JSON.stringify(data));

    axios
      .post(`http://localhost:8080/customer/register`, data)
      .then((response) => {
        alert(response.data);
        navigate("/CustomerLogin");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
        let adminvalidate = sessionStorage.getItem("customerEmail");
        if(adminvalidate==null)
        {
          navigate("/");
        }
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



  let validate = (evnt) => {
    evnt.preventDefault();
    var regEx = /^[a-zA-Z\s]+$/;
    var pattern = /^[6-9]\d{9}$/gi;

    if (inputs.cname === "") {

      swal("Error", "Please enter the name", "error");

    }

    else if (inputs.custEmail === "") {
      swal("Error", "Please enter Mobile number", "error");
      return false;
    }

    else if (
      !pattern.test(inputs.custMobileNo) ||
      isNaN(inputs.custMobileNo) ||
      inputs.custMobileNo.length <= 9
    ) {
      swal("Error", "Please enter valid Mobile number", "error");
      return false;
    }
    else if (inputs.custEmail === "") {
      swal("Error", "Please enter email", "error");
      return false;
    }
    else if (inputs.custEmail.indexOf("@") <= 0) {
      swal("Error", "Please enter valid email", "error");
      return false;
    }
    else if (
      inputs.custEmail.charAt(inputs.custEmail.length - 4) !== "." &&
      inputs.custEmail.charAt(inputs.custEmail.length - 3) !== "."
    ) {
      swal("Error", "Please enter valid email", "error");
      return false;
    }
    else if (inputs.custPassword === "") {
      swal("Error", "Please enter password", "error");
      return false;
    }
    else if (inputs.custPassword.length <= 5) {
      swal("Error", "Password must be atleast 6 character", "error");
      return false;
    }
    else if (uconpassword !== inputs.custPassword) {
      swal("Error", "Please confirm password", "error");
      return false;
    }
    checkEmail(inputs);
  };





  return (
    <div className="row" style={{ background: "linear-gradient(to bottom, #ffffff 0%, #ccffff 100%)" }}>

      <div className="vh-100 d-flex">
        <div className="col-3"></div>
        <form className="col-md-6">
          <div className="container">



            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label mt-3"><b>Name : </b></label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  className="form-control form-control-sm mt-3"
                  type="text"
                  name="cname"
                  value={inputs.cname}
                  onChange={handleChange}
                  style={{ marginBottom: 20 }}
                />
              </div>

            </div>


            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"><b>MobileNo : </b></label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"
                  name="custMobileNo"
                  value={inputs.custMobileNo}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>





            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"><b>Address  :</b> </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"
                  name="custAddress"
                  value={inputs.custAddress}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>




            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"><b>Email  :</b> </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="email"
                  name="custEmail"
                  value={inputs.custEmail}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>



            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"><b>Password  :</b> </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="password"
                  name="custPassword"
                  value={inputs.custPassword}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ marginBottom: 20 }}
                />
              </div>


            </div>


            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"><b>Confirm Password  :</b> </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"

                  id="conpassword"
                  name="conpassword"

                  onChange={uconpasswordinp}
                  value={uconpassword}
                  className="form-control form-control-sm"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>


            <div className="col-9 mt-10 ms-5" style={{ marginTop: 10 }}>
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-md active"
                onClick={validate}
              >
                Sign Up
              </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegister;



