//import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



const DboyStatusUpdate = () => {


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
      .put("http://localhost:8080/CourierStatusUpdate", inputs)
      .then((response) => {
        alert(response.data);
        navigate("/Dboy");
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

            <div className="col-md-6 mt-10">
              <label className="form-label text-white"><strong>Status :</strong> </label>
              <select name="randomstatus" type="text" value={inputs.randomstatus} onChange={handleChange}
                className="form-select-md mb-3 mt-5">
                <option value={inputs.randomstatus} >{inputs.randomstatus}</option>
                <option value="PickedUpFromCustomer">PickedUpFromCustomer</option>
                <option value="ReachedAtOffice" >ReachedAtOffice</option>
                <option value="PickedUpFromOffice" >PickedUpFromOffice</option>
                <option value="Delivered" >Delivered</option>
              </select>
            </div>



            <div className="col-6 mt-10" >
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-md active"
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
export default DboyStatusUpdate;