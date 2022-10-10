import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function DboyCouriers() {




    let useremail = sessionStorage.getItem("user");



    const [responseData, setResponseData] = useState([]);

    const viewCouriers = () => {
        axios.get(`http://localhost:8080/findCourierDboy/${useremail}`)
            .then(response => {
                console.log(response.data);
                setResponseData(response.data);
            })
            .catch(error => {
                alert(error);
            });
    };


    useEffect(() => {

        viewCouriers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    return <div className="text-white">

        <div class="container ">
            <h2>Couriers Information</h2>

            <table class="table table-striped text-white">
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
                        {/* <th>deliveryBoy</th> */}
                        <th>Update status</th>

                        {/* <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody className="text-white">
                    {
                        responseData.map(
                            cour => <tr key="{cour.bid}"  >
                                <td className="text-white">{cour.bid}</td>
                                <td className="text-white">{cour.bookingDate}</td>
                                <td className="text-white">{cour.courierType}</td>
                                <td className="text-white">{cour.weight}</td>
                                <td className="text-white">{cour.modeOfTransport}</td>
                                <td className="text-white">{cour.receiverName}</td>
                                <td className="text-white">{cour.receiverMobNo}</td>
                                <td className="text-white">{cour.receiverAddress}</td>
                                <td className="text-white">{cour.fromCity}</td>
                                <td className="text-white">{cour.toCity}</td>
                                <td className="text-white">{cour.randomstatus}</td>


                                <td><Link to="/Dboy/DboyStatusUpdate" state={cour} class="btn btn-primary" >Update</Link> </td>



                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>;
};

export default DboyCouriers;