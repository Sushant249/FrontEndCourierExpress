//import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



const EmployeeCourierUpdate = () => {


  const navigate = useNavigate();

  const userState = useLocation();

  const [inputs, setInputs] = useState(userState.state);

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    alert(JSON.stringify(inputs));

    axios
      .put("http://localhost:8080/AssignCourier", inputs)
      .then((response) => {
        alert(response.data);
        navigate("/Employee/OutgoingCouriers");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      {/* <Navbar title="SignUp" /> */}
      <div className="vh-100 d-flex">
        <form className="col-md-6">
          <div className="container">

            <div className="col-md-6">
              <label className="form-label">Status : </label>

              <select name="randomstatus" type="text" value={inputs.randomstatus} onChange={handleChange}>

                <option value={inputs.randomstatus} >{inputs.randomstatus}</option>
                <option value="BookingReceived" >BookingReceived</option>
                <option value="ReceivedAtOffice" >ReceivedAtOffice</option>
                <option value="Intransit" >Intransit</option>
                <option value="OutForDelivery" >OutForDelivery</option>

              </select>

            </div>

            <div className="col-md-6">
              <label className="form-label">Dboy ID : </label>
              <input
                type="text"
                name="deliveryBoy"
                value={inputs.deliveryBoy}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>






            <div className="col-6 mt-10" style={{ marginTop: 40 }}>
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-lg active"
                onClick={handleSubmit}
              >
                Update
              </button>
              {/* <div className="float-end">
                  Existing User: <Link to="/signin">SignIn Here</Link>
                </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EmployeeCourierUpdate;