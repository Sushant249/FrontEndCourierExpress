import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewEmployees() {

   const [responseData, setResponseData] = useState([]);

   const viewEmployees = () => {
      axios.get('http://localhost:8080/empDetails')
         .then(response => {
            setResponseData(response.data);
         })
         .catch(error => {
            alert(error);
         });
   };


   useEffect(() => {


      let adminvalidate = sessionStorage.getItem("adminUser");
      if (adminvalidate == null) {
         navigate("/Login");
      }




      viewEmployees();

   }, []);

   const empDelete = evnt => {
      axios.delete('http://localhost:8080/deleteUser/' + evnt.target.value)
         .then(response => {
            viewEmployees();
         })
         .catch(error => {
            alert(error);
         })
   };




   return <div style={{
      background: "linear-gradient(to bottom, #ffcc66 0%, #9999ff 100%)",
      backgroundColor: '#E1E8ED',
      height: "100%",
      // backgroundImage: `url("piccc1.jpg")`,
      // backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
   }}>

      <div class="container">
         <h2><b>Employee Information</b></h2>

         <table class="table table-striped">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>MobNo</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Email</th>
                  {/* <th>Password</th> */}
                  <th>Role</th>
                  {/* <th>Update</th> */}
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {
                  responseData.map(
                     val => <tr key="{val.id}"  >
                        <td>{val.name}</td>
                        <td>{val.mobileNo}</td>
                        <td>{val.city}</td>
                        <td>{val.address}</td>
                        <td>{val.email}</td>
                        {/* <td>{val.password}</td> */}
                        <td>{val.role}</td>
                        {/* <td><Link to="/car/update" state={val} class="btn btn-primary" >Update</Link> </td> */}


                        <td><button type="button" style={{ color: "red" }} id={val.uid} value={val.uid} onClick={empDelete} >X</button> </td>
                     </tr>
                  )
               }
            </tbody>
         </table>
      </div>
   </div>;
};
export default ViewEmployees;