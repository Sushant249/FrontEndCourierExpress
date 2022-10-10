import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function OutgoingCouriers() {

    const navigate = useNavigate();


    let useremail = sessionStorage.getItem("EmployeeUser");



    const [responseData, setResponseData] = useState([]);

    const viewCouriersFromCity = () => {
        axios.get(`http://localhost:8080/findCourierFromCity/${useremail}`)
            .then(response => {
                console.log(response.data);
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
            console.log("nav");
          navigate("/Login");
        }

        viewCouriersFromCity();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    return <div style={{
        backgroundColor: '#E1E8ED',
        width: '100vw',
        height: '100vh',

    }}>

        <div class="container ">
            <h2 className="display-6"><strong>Outgoing Couriers</strong></h2>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Booking date</th>
                        <th>CourierType</th>
                        <th>Weight</th>
                        <th>ModeOfTransport</th>
                        <th>ReceiverName</th>
                        <th>ReceiverMobNo</th>
                        <th>ReceiverAddress</th>
                        <th>FromCity</th>
                        <th>ToCity</th>
                        <th>Status</th>
                        <th>DboyId</th>
                        <th>AssignDboy/UpdateStatus</th>
                        {/* <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody >
                    {
                        responseData.map(
                            cour => <tr key="{cour.bid}"  >
                                <td class="font-weight-bold">{cour.bid}</td>
                                <td class="font-weight-bold">{cour.bookingDate}</td>
                                <td class="font-weight-bold">{cour.courierType}</td>
                                <td class="font-weight-bold">{cour.weight}</td>
                                <td class="font-weight-bold">{cour.modeOfTransport}</td>
                                <td class="font-weight-bold">{cour.receiverName}</td>
                                <td class="font-weight-bold">{cour.receiverMobNo}</td>
                                <td class="font-weight-bold">{cour.receiverAddress}</td>
                                <td class="font-weight-bold">{cour.fromCity}</td>
                                <td class="font-weight-bold">{cour.toCity}</td>
                                <td class="font-weight-bold">{cour.randomstatus}</td>
                                <td class="font-weight-bold">{cour.deliveryBoy}</td>
                                <td><Link to="/Employee/update" state={cour} class="btn btn-primary" >Update</Link> </td>


                                {/* <td><button type="button" id={val.uid} value={val.uid} onClick={userDelete} >X</button> </td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>;
};

export default OutgoingCouriers;