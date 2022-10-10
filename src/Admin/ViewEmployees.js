import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ViewEmployees() {
   const navigate = useNavigate();
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
      if(adminvalidate=="")
      {
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
               <th><u>Id</u></th>
                  <th><u>Name</u></th>
                  <th><u>MobNo</u></th>
                  <th><u>City</u></th>
                  <th><u>Address</u></th>
                  <th><u>Email</u></th>
                  {/* <th><u>Password</u></th> */}
                  <th><u>Role</u></th>
                  {/* <th>Update</th> */}
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {
                  responseData.map(
                     val => <tr key="{val.id}"  >
                       <td class="font-weight-bold">{val.uid}</td>
                        <td class="font-weight-bold">{val.name}</td>
                        <td class="font-weight-bold">{val.mobileNo}</td>
                        <td class="font-weight-bold">{val.city}</td>
                        <td class="font-weight-bold">{val.address}</td>
                        <td class="font-weight-bold">{val.email}</td>
                        {/* <td class="font-weight-bold">{val.password}</td> */}
                        <td class="font-weight-bold">{val.role}</td>
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