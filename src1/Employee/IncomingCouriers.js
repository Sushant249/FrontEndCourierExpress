import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function IncomingCouriers() {




    let useremail = sessionStorage.getItem("user");



    const [responseData, setResponseData] = useState([]);

    const viewCouriersToCity = () => {
        axios.get(`http://localhost:8080/findCourierToCity/${useremail}`)
            .then(response => {
                console.log(response.data);
                setResponseData(response.data);
            })
            .catch(error => {
                alert(error);
            });
    };


    useEffect(() => {

        viewCouriersToCity();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    return <div style={{
        backgroundColor: '#E1E8ED',
        width: '100vw',
        height: '100vh',

    }}>

        <div class="container">
            <h2 className="display-6"><strong>Incoming Couriers</strong></h2>

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
                        <th>DeliveryBoy</th>
                        <th>Update</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        responseData.map(
                            cour => <tr key="{cour.bid}"  >
                                <td>{cour.bid}</td>
                                <td>{cour.bookingDate}</td>
                                <td>{cour.courierType}</td>
                                <td>{cour.weight}</td>
                                <td>{cour.modeOfTransport}</td>
                                <td>{cour.receiverName}</td>
                                <td>{cour.receiverMobNo}</td>
                                <td>{cour.receiverAddress}</td>
                                <td>{cour.fromCity}</td>
                                <td>{cour.toCity}</td>
                                <td>{cour.randomstatus}</td>
                                <td>{cour.deliveryBoy}</td>
                                <td><Link to="/Employee/update" state={cour} class="btn btn-primary" >Update</Link> </td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>;
};

export default IncomingCouriers;