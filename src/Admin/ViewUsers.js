import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ViewUsers() {
   const navigate = useNavigate();
   const [responseData, setResponseData] = useState([]);

   const viewUsers = () => {
      axios.get('http://localhost:8080/userDetails')
         .then(response => {
            setResponseData(response.data);
         })
         .catch(error => {
            //alert(error);
         });
   };




   useEffect(() => {

      let adminvalidate = sessionStorage.getItem("adminUser");
      if (adminvalidate == "") {
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
            <thead >
               <tr>
                  <th><u>Id</u></th>
                  <th><u>Name</u></th>
                  <th><u>MobNo</u></th>
                  <th><u>City</u></th>
                  <th><u>Address</u></th>
                  <th><u>Email</u></th>
                  {/* <th><u>Password</u></th> */}
                  <th><u>Role</u></th>
                  <th><u>Update</u></th>
                  <th><u>Delete</u></th>
               </tr>
            </thead>
            <tbody class="font-weight-bold">
               {
                  responseData.map(
                     val =>
                        <tr key="{val.uid}">
                           <td class="font-weight-bold">{val.uid}</td>
                           <td class="font-weight-bold">{val.name}</td>
                           <td class="font-weight-bold">{val.mobileNo}</td>
                           <td class="font-weight-bold">{val.city}</td>
                           <td class="font-weight-bold">{val.address}</td>
                           <td class="font-weight-bold">{val.email}</td>

                           <td class="font-weight-bold">{val.role}</td>
                           <td class="font-weight-bold"><Link to="/Admin/update" state={val} class="btn btn-primary btn-md" >Update</Link> </td>


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