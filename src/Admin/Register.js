
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";


const Register = () => {

  const [inputs, setInputs] = useState({});
  let [uconpassword, setUconpassword] = useState("");
  let uconpasswordinp = (e) => setUconpassword(e.target.value);
  const navigate = useNavigate();


  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  useEffect(() => {

    let adminvalidate = sessionStorage.getItem("adminUser");
    if(adminvalidate==null)
    {
      navigate("/Login");
    }

   

 }, []);

  const checkEmail = (data) => {

    // alert(JSON.stringify(data));

    axios
      .post("http://localhost:8080/user_register/1", data)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
        navigate("/Admin/");
      })
      .catch((error) => {
        alert(error);
      });
  };


  let validate = (evnt) => {
    evnt.preventDefault();
    var regEx = /^[a-zA-Z\s]+$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    var pattern = /^[6-9]\d{9}$/gi;

    // if (inputs.name == undefined) {

    //   swal("Error", "Please enter the name", "error");
    //   return false;
    // }
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if (!isNaN(inputs.name )) {
      swal("Error", "Please Enter Char Onlyl in Name", "error");
      return false;
    } else if( inputs.name.match(format) ){
      swal("Error", "special characters Not allowded  in  Name", "error");
      return false;
    }else if( /\s/g.test(inputs.name) ){
      swal("Error", "White space  Not allowed in Name", "error");
      return false;
  }

  if (!isNaN(inputs.city)) {
    swal("Error", "Please Enter Char Onlyl in City Name", "error");
    return false;
  } else if( inputs.city.match(format) ){
    swal("Error", "special characters Not allowded  in City Name", "error");
    return false;
  }else if( /\s/g.test(inputs.city) ){
    swal("Error", "White space  Not allowed in City Name", "error");
    return false;
}
    



    else if (inputs.mobileNo === "") {
      swal("Error", "Please enter Mobile number", "error");
      return false;
    } else if (
      !pattern.test(inputs.mobileNo) ||
      isNaN(inputs.mobileNo) ||
      inputs.mobileNo.length <= 9

    ) {
      swal("Error", "Please enter valid Mobile number", "error");
      return false;
    } else if (inputs.email === "") {
      swal("Error", "Please enter email", "error");
      return false;
    } else if (inputs.email.indexOf("@") <= 0) {
      swal("Error", "Please enter valid email", "error");
      return false;
    } else if (
      inputs.email.charAt(inputs.email.length - 4) !== "." &&
      inputs.email.charAt(inputs.email.length - 3) !== "."
    ) {
      swal("Error", "Please enter valid email", "error");
      return false;
    } 
    //else if (inputs.password === "") {
    //   swal("Error", "Please enter password", "error");
    //   return false;
    // } else if (inputs.password.length <= 5) {
    //   swal("Error", "Password must be atleast 6 character", "error");
    //   return false;
    // } 
    else if (!strongRegex.test(inputs.password)){
      swal("Error", "password should contain : (at least one capital letter, one numeric value and one special character, min length : 6 )", "error");
      return false;

    } 
    else if (uconpassword !== inputs.password) {
      swal("Error", "Please confirm password", "error");
      return false;
    }
    checkEmail(inputs);
  };

  return (
    <div style={{
      background: "linear-gradient(to bottom, #33ccff 0%, #ff9999 100%)",
      //backgroundColor: '#99FFFF',
      height: "100%"
    }}>

      < div className="vh-100 d-flex" >
        <div className="col-md-3"></div>
        <form className="col-md-7">
          <strong className="display-5 mb-4">Registration Form</strong><br />
          <div className="container">
            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label mt-3"><b>Name : </b></label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  className="form-control form-control-sm mt-3"
                  type="text"
                  name="name"
                  value={inputs.name}
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
                  name="mobileNo"
                  value={inputs.mobileNo}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>


            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"><b>Office City  :</b> </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"
                  name="city"
                  value={inputs.city}
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
                  name="address"
                  value={inputs.address}
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
                  name="email"
                  value={inputs.email}
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
                  name="password"
                  value={inputs.password}
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
                  type="password"

                  id="conpassword"
                  name="conpassword"

                  onChange={uconpasswordinp}
                  value={uconpassword}
                  className="form-control form-control-sm"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>



            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"> <b>Role  :</b> </label>
              </div>
              <div className="col-md-6 pe-3">
                <select type="text" name="role" value={inputs.role} onChange={handleChange}
                  className="form-select form-select-md mb-3">
                  <option value="Select" >Select</option>
                  <option value="dby" >Deliveryboy</option>
                  <option value="emp">Employee</option>
                </select>
              </div>
            </div>



            <div className="col-6 mt-6 ms-5" >
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-md active ms-5"
                onClick={validate}
              >
                <b>Sign Up</b>
              </button>
            </div>
          </div>
        </form>
      </div >
    </div >
  );
};

export default Register;



