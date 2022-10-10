import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewDboys() {

   let useremail = sessionStorage.getItem("EmployeeUser");
   const navigate = useNavigate();
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

      let adminvalidate = sessionStorage.getItem("EmployeeUser");
      if(adminvalidate==null)
      {
        navigate("/Login");
      }
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
         <h2 className="display-6"><strong><u>Delivery Boys</u></strong></h2>
         <table class="table table-striped">
            <thead>
               <tr>
               <th><u>Id</u></th>
                  <th><u>Name</u></th>
                  <th><u>MobNo</u></th>
                  <th><u>City</u></th>
                  <th><u>Address</u></th>
                  <th><u>Email</u></th>
                 
                  <th><u>Role</u></th>
                  {/* <th>Update</th> */}
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {
                  responseData.map(
                     val => <tr key="{val.uid}"  >
                       <td class="font-weight-bold">{val.uid}</td>
                        <td class="font-weight-bold">{val.name}</td>
                        <td class="font-weight-bold">{val.mobileNo}</td>
                        <td class="font-weight-bold">{val.city}</td>
                        <td class="font-weight-bold">{val.address}</td>
                        <td class="font-weight-bold">{val.email}</td>
                       
                        <td class="font-weight-bold">{val.role}</td>
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