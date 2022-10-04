import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DboyProfile() {

  const [dboyData, setdboyData] = useState([]);

  let useremail = sessionStorage.getItem("user");

  const viewDby = () => {
    axios.get(`http://localhost:8080/findEmp/${useremail}`)
      .then(response => {
        console.log(response.data);
        setdboyData(response.data);
      })
      .catch(error => {
        alert(error);
      });
  };


  useEffect(() => {

    viewDby();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);






  return <>

    <div class="container mt-3 text-white">
      <h2>Profile</h2>

      <table class="table table-striped text-white">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>MobNo</th>
            <th>City</th>
            <th>Address</th>
            <th>Email</th>
            <th>Password</th>

            {/* <th>Role</th> */}
            <th>Update</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody className="text-white">
          {
            dboyData.map(
              usr => <tr key="{usr.uid}"  >
                <td className="text-white">{usr.uid}</td>
                <td className="text-white">{usr.name}</td>
                <td className="text-white">{usr.mobileNo}</td>
                <td className="text-white">{usr.city}</td>
                <td className="text-white">{usr.address}</td>
                <td className="text-white">{usr.email}</td>
                <td className="text-white">{usr.password}</td>

                {/* <td>{val.role}</td> */}
                <td><Link to="/Dboy/DboyUpdateProfile" state={usr} class="btn btn-primary" >Update</Link> </td>


                {/* <td><button type="button" id={val.id} value={val.id} onClick={dbyDelete} >X</button> </td> */}
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  </>;
};
export default DboyProfile;