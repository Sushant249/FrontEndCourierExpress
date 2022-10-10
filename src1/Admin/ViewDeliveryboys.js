import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewDeliveryboys() {

   const [responseData, setResponseData] = useState([]);

   const viewDeliveryboys = () => {
      axios.get('http://localhost:8080/dboyDetails')
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





      viewDeliveryboys();

   }, []);

   const dbyDelete = evnt => {
      axios.delete('http://localhost:8080/deleteUser/' + evnt.target.value)
         .then(response => {
            viewDeliveryboys();
         })
         .catch(error => {
            alert(error);
         })
   };




   return <div style={{
      background: "linear-gradient(to bottom, #ffcc66 0%, #9999ff 100%)",
      backgroundColor: '#E1E8ED',
      width: '100vw',
      height: '100vh',

   }}>

      <div class="containe">
         <h2><b>Delivery boys Information</b></h2>

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

                        <td><button type="button" id={val.id} value={val.id} onClick={dbyDelete} >X</button> </td>
                     </tr>
                  )
               }
            </tbody>
         </table>
      </div>
   </div>;
};
export default ViewDeliveryboys;