import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewProfile() {

  const [empData, setempData] = useState([]);

  let useremail = sessionStorage.getItem("user");

  const viewSelf = () => {
    axios.get(`http://localhost:8080/findEmp/${useremail}`)
      .then(response => {
        console.log(response.data);
        setempData(response.data);
      })
      .catch(error => {
        alert(error);
      });
  };


  useEffect(() => {

    viewSelf();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);






  return <div style={{
    backgroundColor: '#E1E8ED',
    width: '100vw',
    height: '100vh',

  }}>

    <div class="container">
      <h2 className="display-6"><strong>Profile</strong></h2>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>MobNo</th>
            <th>City</th>
            <th>Address</th>
            <th>Email</th>

            {/* <th>Role</th> */}
            <th>Update</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {
            empData.map(
              usr => <tr key="{usr.uid}"  >
                <td>{usr.uid}</td>
                <td>{usr.name}</td>
                <td>{usr.mobileNo}</td>
                <td>{usr.city}</td>
                <td>{usr.address}</td>
                <td>{usr.email}</td>


                {/* <td>{val.role}</td> */}
                <td><Link to="/Employee/updateProfile" state={usr} class="btn btn-primary" >Update</Link> </td>


                {/* <td><button type="button" id={val.id} value={val.id} onClick={dbyDelete} >X</button> </td> */}
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  </div>;
};
export default ViewProfile;