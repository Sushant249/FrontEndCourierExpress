import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewUsers() {

   const [responseData, setResponseData] = useState([]);

   const viewUsers = () => {
      axios.get('http://localhost:8080/userDetails')
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





      viewUsers();

   }, []);

   const userDelete = (evnt) => {
      axios.delete('http://localhost:8080/deleteUser/' + evnt.target.value)
         .then(response => {
            viewUsers();
         })
         .catch(error => {
            alert(error);
         })
   };



   return <div style={{
      background: "linear-gradient(to bottom, #ffff99 0%, #ccffcc 100%)",
      //backgroundColor: '#E1E8ED',
      height: "100%",
      // backgroundImage: `url("piccc1.jpg")`,
      // backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
   }}>

      <div class="container  text-dark">
         <h2 className="">User Information</h2>

         <table class="table table-striped">
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>MobNo</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Update</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {
                  responseData.map(
                     val => <tr key="{val.uid}"  >
                        <td>{val.uid}</td>
                        <td>{val.name}</td>
                        <td>{val.mobileNo}</td>
                        <td>{val.city}</td>
                        <td>{val.address}</td>
                        <td>{val.email}</td>
                        <td>{val.role}</td>
                        <td><Link to="/Admin/update" state={val} class="btn btn-primary btn-md" >Update</Link> </td>


                        <td><button type="button" id={val.uid} value={val.uid} onClick={userDelete} >X</button> </td>
                     </tr>
                  )
               }
            </tbody>
         </table>
      </div>
   </div >;
};
export default ViewUsers;