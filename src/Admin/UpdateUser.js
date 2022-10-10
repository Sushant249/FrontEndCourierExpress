
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UpdateUser = () => {

  const navigate = useNavigate();

  const userState = useLocation();

  const [inputs, setInputs] = useState(userState.state);


  useEffect(() => {

    let adminvalidate = sessionStorage.getItem("adminUser");
    if(adminvalidate==null)
    {
      navigate("/Login");
    }

  

 }, []);

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    alert(JSON.stringify(inputs));

    axios
      .put("http://localhost:8080/updateUser", inputs)
      .then((response) => {
        alert(response.data);
        navigate("/Admin/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div style={{
      background: "linear-gradient(to bottom, #33ccff 0%, #ff9999 100%)",
      //backgroundColor: '#33ccff',
      height: "100%"
    }}>
      {/* <Navbar title="SignUp" /> */}
      <div className="vh-100 d-flex">
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
                <label className="form-label"> <b>Role  :</b> </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"
                  name="role"
                  value={inputs.role}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>

            <div className="col-6 mt-10 ms-5">
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-md active"
                onClick={handleSubmit}
              >
                Update
              </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;



