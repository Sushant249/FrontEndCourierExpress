import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert"


const CourierBooking = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    setInputs((values) => ({ ...values, [paramName]: paramValue }));

  };

  useEffect(() => {
    let adminvalidate = sessionStorage.getItem("customerEmail");
    if (adminvalidate == null) {
      navigate("/");
    }


  }, []);

  const handleSubmit = (data) => {

    sessionStorage.setItem("RecMob", data.receiverMobNo);


    alert(JSON.stringify(data));

    axios
      .post("http://localhost:8080/addBooking", data)
      .then((response) => {

        alert(response.data);
        console.log(response.data);
        navigate("/Customer/ShowData")
      })
      .catch((error) => {
        alert(error);
        // console.log(error:);
      });
  };

  let validate = (evnt) => {
    evnt.preventDefault();
    var regEx = /^[a-zA-Z\s]+$/;
    var pattern = /^[6-9]\d{9}$/gi;

    if (inputs.receiverName === "") {

      swal("Error", "Please enter the name", "error");
      return false;
    }



    else if (inputs.receiverMobNo === "") {
      swal("Error", "Please enter Mobile number", "error");
      return false;
    }
    else if (
      !pattern.test(inputs.receiverMobNo) ||
      isNaN(inputs.receiverMobNo) ||
      inputs.receiverMobNo.length <= 9

    ) {
      swal("Error", "Please enter valid Mobile number", "error");
      return false;
    }

    else if (inputs.receiverAddress === "") {
      swal("Error", "Please enter Address", "error");
      return false;
    }

    else if (inputs.fromCity === "") {
      swal("Error", "Please enter city name", "error");
      return false;
    }
    else if (inputs.toCity === "") {
      swal("Error", "Please enter city name", "error");
      return false;
    }


    handleSubmit(inputs);
  };




  return (
    <div className="row" style={{
      backgroundColor: '#E1E8ED',

      width: '100vw',
      height: '140vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',

    }}>
      <div className="col-3"></div>
      <div className="vh-100 d-flex col-9">

        <form className="col-md-9">
          <strong className="text-center display-5 ">Courier Booking Form</strong>
          <div className="container">

            <div className="row align-items-center py-1 mt-2">
              <div className="col-md-3 ps-2">
                <label className="form-label">BookingDate : </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="date"
                  name="bookingDate"
                  value={inputs.bookingDate}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>

            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label">Courier Type : </label>
              </div>
              <div className="col-md-6 pe-3">
                <select type="text" name="courierType" value={inputs.courierType} onChange={handleChange}
                  className="form-select form-select-md mb-3">
                  <option value="Select" >Select</option>
                  <option value="Document" >Document</option>
                  <option value="NonDocument">NonDocument</option>
                </select>
              </div>
            </div>


            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label">Weight : </label>
              </div>
              <div className="col-md-6 pe-3">
                <select name="confirmweight" type="number" onChange={handleChange}
                  className="form-select form-select-md mb-3">
                  <option value="Select"  >Select</option>
                  <option value="0 to 0.5kg" >0 to 0.2kg</option>
                  <option value="0.5 to 2kg" >0.5 to 2kg</option>
                  <option value="2 to 5kg" >2 to 5kg</option>
                  <option value="5 to 10kg" >5 to 10kg</option>
                  <option value="10 to 20kg" >10 to 20kg</option>
                </select>
              </div>

              <div className="row align-items-center py-1">
                <div className="col-md-3 ps-3">
                  <label className="form-label">Approx Weight : </label>
                </div>
                <div className="col-md-6 pe-2">
                  <input
                    type="number"
                    name="weight"
                    value={inputs.weight}
                    onChange={handleChange}
                    className="form-control"
                    style={{ marginBottom: 20 }}
                  />
                </div>
              </div>
            </div>


            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label">Mode Of Transport : </label>
              </div>
              <div className="col-md-6 pe-3">
                <select name="modeOfTransport" type="text" value={inputs.modeOfTransport} onChange={handleChange}
                  className="form-select form-select-md mb-3">
                  <option value="Select" >Select</option>
                  <option value="byRoad" >byRoad</option>
                  <option value="byTrain">byTrain</option>
                  <option value="byAir" >byAir</option>
                </select>
              </div>
            </div>



            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"> Receiver Name: : </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"
                  name="receiverName"
                  value={inputs.receiverName}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>


            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"> Receiver MobileNO : </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"
                  name="receiverMobNo"
                  value={inputs.receiverMobNo}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>

            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <p className="form-label">Receiver Address : </p>
              </div>
              <div className="col-md-6 pe-3">
                <textarea type="text" rows="3" cols="35" name="receiverAddress" value={inputs.receiverAddress}
                  onChange={handleChange} placeholder="Enter details Address here...">

                </textarea>
              </div>
            </div>



            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"> From City : </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"
                  name="fromCity"
                  value={inputs.fromCity}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>




            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-2">
                <label className="form-label"> To City : </label>
              </div>
              <div className="col-md-6 pe-3">
                <input
                  type="text"
                  name="toCity"
                  value={inputs.toCity}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>



            <div className="col-9 mt-8 ms-5"  >
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-md active"
                onClick={validate}

              >
                Click For Booking
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
export default CourierBooking;