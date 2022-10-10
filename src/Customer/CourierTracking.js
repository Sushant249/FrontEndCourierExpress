import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert"
import { Navigate, redirect, useNavigate } from "react-router-dom";
const CourierTracking = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [object, setObject] = useState({});

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    alert(JSON.stringify(inputs));

    axios
      .get(`http://localhost:8080/findCourier/${inputs.bid}`)
      .then((response) => {
        if (response.data != null && response.data.bookingDate == inputs.bookingDate) {
          console.log(response.data);
          alert(response.data);
          setObject(response.data);

        }
        else {
          swal("Error", "Please enter valid Details", "error");
        }
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


  return <>
    <div>

      <div className="vh-100 d-flex " style={{
        backgroundColor: '#E1E8ED',
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

      }}>
        <div class="col-1"></div>
        <form className="col-md-4 mt-4" >
          <div className="display-6"><strong>Check Courier Status</strong></div>
          <div className="container mt-2" style={{ border: "2px solid" }}>

            <div className="col-md-9 ms-5">
              <label className="form-label"><b>Booking Id :</b> </label>
              <input
                type="text"
                name="bid"
                value={inputs.bid}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>

            <div className="col-md-9 ms-5">
              <label className="form-label"> <b>Booking Date :</b> </label>
              <input
                type="date"
                name="bookingDate"
                value={inputs.bookingDate}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>

            <div className="col-md-9 mt-10 ms-5" style={{ marginTop: 10 }}>
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-md active"
                onClick={handleSubmit} > search</button>
            </div>



          </div>
        </form >

        <div class="col-5 mt-5 " style={{ fontFamily: "Brush Script MT", fontSize: "150%" }}>
          <div>
            <p>Receiver Name : {object.receiverName}</p>
            <p>Receiver Mobile : {object.receiverMobNo}</p>
            <p>Receiver Address : {object.receiverAddress}</p>
            <p>Courier Status : {object.randomstatus}</p>
          </div>
        </div>


      </div>

    </div>
    <hr />



  </>
};
export default CourierTracking;