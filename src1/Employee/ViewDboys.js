import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewDboys() {

   let useremail = sessionStorage.getItem("user");

   const [responseData, setResponseData] = useState([]);

   const viewDboyByCity = () => {
      axios.get(`http://localhost:8080/findDboyByCity/${useremail}`)
         .then(response => {
            setResponseData(response.data);
         })
         .catch(error => {
            alert(error);
         });
   };


   useEffect(() => {

      viewDboyByCity();

   }, []);

   const DbyDelete = evnt => {
      axios.delete('http://localhost:8080/deleteUser/' + evnt.target.value)
         .then(response => {
            viewDboyByCity();
         })
         .catch(error => {
            alert(error);
         })
   };




   return <div style={{
      backgroundColor: '#E1E8ED',
      width: '100vw',
      height: '100vh',

   }}>

      <div class="container">
         <h2 className="display-6"><strong>Delivery Boys</strong></h2>
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
                  {/* <th>Update</th> */}
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
                        {/* <td><Link to="/car/update" state={val} class="btn btn-primary" >Update</Link> </td> */}


                        <td><button type="button" id={val.id} value={val.id} onClick={DbyDelete} >X</button> </td>
                     </tr>
                  )
               }
            </tbody>
         </table>
      </div>
   </div>;
};
export default ViewDboys;