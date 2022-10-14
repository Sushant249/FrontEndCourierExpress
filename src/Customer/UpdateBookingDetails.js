
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert"


const UpdateBookingDetails = () => {

  const navigate = useNavigate();

  // const userState = useLocation();

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    let adminvalidate = sessionStorage.getItem("customerEmail");
    if (adminvalidate == null) {
      navigate("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      .put(`http://localhost:8080/CustomerCourierUpdate/${inputs.bid}/${inputs.receiverAddress}`)
      .then((response) => {
        alert(response.data);
        if (response.data == "OutForDelivery") {
          swal("Error", "Courier will reach to you soon it has been out for Delivery ", "error");
        }
        else {
          navigate("/Customer/");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div >
      <div style={{
        backgroundImage: `url("track.jpg")`,
        backgroundColor: '#E1E8ED',
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

      }}>


        <div className="vh-100 d-flex ">
          <div class="col-3"></div>
          <form className="col-md-6">
            <div className="display-6 mt-3"><strong>Update Address</strong></div>
            <div className="container mt-2 col-9" style={{ border: "2px solid" }}>


              <div className="row align-items-center py-1 mt-2">
                <div className="col-md-3 ps-2">
                  <label className="form-label">Booking Id : </label>
                </div>
                <div className="col-md-9 pe-3">
                  <input
                    type="text"
                    name="bid"
                    value={inputs.bid}
                    onChange={handleChange}
                    className="form-control"
                    style={{ marginBottom: 20 }}
                  />
                </div>
              </div>

              <div className="row align-items-center py-1 mt-2">
                <div className="col-md-3 ps-2">
                  <label className="form-label">Address : </label>
                </div>
                <div className="col-md-6 pe-3">
                  <textarea rows="4" cols="35" name="receiverAddress" value={inputs.receiverAddress}
                    onChange={handleChange} placeholder="Enter details Address here...">

                  </textarea>
                </div>
              </div>


              <div className="col-10 mt-10 ms-5" style={{ marginTop: 10 }}>
                {" "}
                <button
                  type="submit"
                  className="btn btn-primary btn-md  active"
                  onClick={handleSubmit}
                >
                  Update
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookingDetails;



