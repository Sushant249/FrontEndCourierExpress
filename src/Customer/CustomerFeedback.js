import { useState } from "react";
import axios from "axios";

const CustomerFeedbcak = () => {


  const [inputs, setInputs] = useState({});
  const [data, setData] = useState({});

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    alert(JSON.stringify(inputs));
    setData(inputs);
    console.log(inputs);

  };
  return <>
    <div style={{
      backgroundImage: `url("track.jpg")`,
      backgroundColor: '#E1E8ED',
      width: '100vw',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',

    }}>

      <div className="vh-100 d-flex">
        <div class="col-3"></div>
        <form className="col-md-6">
          <div className="display-6 mt-3"><strong>Feedback</strong></div>
          <div className="container mt-2 col-9" style={{ border: "2px solid" }}>

            <div className="row align-items-center py-1 mt-2">
              <div className="col-md-3 ps-2">
                <label className="form-label"> <b>Name :</b> </label>
              </div>
              <div className="col-md-9 pe-3">
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  className="form-control"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </div>



            <div className="row align-items-center py-1 mt-2">
              <div className="col-md-3 ps-2">
                <label className="form-label"><b>Feedback :</b></label>
              </div>
              <div className="col-md-6 pe-3">
                <textarea rows="4" cols="35" name="description" value={inputs.description}
                  onChange={handleChange} placeholder="Enter details here...">

                </textarea>
              </div>
            </div>

            <div className="col-9 mt-10 ms-5" style={{ marginTop: 10 }}>
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-md"
                onClick={handleSubmit}
              >
                Feedback
              </button>

            </div>



          </div>
          <br /><br />
          <div style={{ backgroundColor: '#00FFFF' }}>Description : {data.description} </div>
        </form>

      </div>

    </div >
    <div>Thank you </div>


  </>
};
export default CustomerFeedbcak;
