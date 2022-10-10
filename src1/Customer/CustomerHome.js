import react from "react"

const CustomerHome = () => {
    return (
        <div style={{
            backgroundImage: `url("https://images.pexels.com/photos/12338371/pexels-photo-12338371.jpeg?cs=srgb&dl=pexels-hasan-kurt-12338371.jpg&fm=jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',

        }}>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <div class="row  mb-3" >
                <div className="col-1 mt-3"> </div>
                <div className="col-lg-2 col-md-4 card ml-2 me-5" style={{
                    backgroundColor: '#99FFCC',

                }}>
                    <div className="mission card-body">

                        <div className="mission-content"><div >
                            <div className="overlay"></div>
                            <h2 className="card-title"><strong>Express service</strong></h2>
                            <p class="card-text">We offer express Pick up & Express Delivery.</p>

                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 card ml-2  ms-3 me-5" style={{
                    backgroundColor: '#99FFCC',

                }}>
                    <div className="mission card-body">

                        <div className="mission-content"><div >
                            <div className="overlay"></div>
                            <h2 className="card-title"><strong>Courier Tracking</strong></h2>
                            <p class="card-text">We offer fast and reliable package delivery at cost-effective pricing.</p>

                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 card ml-2  me-5" style={{
                    backgroundColor: '#99FFCC',

                }}>
                    <div className="mission card-body">

                        <div className="mission-content"><div >
                            <div className="overlay"></div>
                            <h2 className="card-title"><strong>Reasonable Rates</strong></h2>
                            <p class="card-text">Our services are quick, efficient and available at reasonable prices.</p>

                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 card ml-2  me-5" style={{
                    backgroundColor: '#99FFCC',

                }}>
                    <div className="mission card-body">

                        <div className="mission-content"><div >
                            <div className="overlay"></div>
                            <h2 className="card-title"><strong>Customer Supports</strong></h2>
                            <p class="card-text">We offer same day pickup (By 5 P.M.) with 24*7 customer support.</p>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default CustomerHome;