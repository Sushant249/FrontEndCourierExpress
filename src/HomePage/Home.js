import react from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AboutUs from "./AboutUs";
import FlipCards from "./FlipCards";
import Footer from "./Footer";
import VisionMission from "./VisionMission";
import Testimonial from "./Testimonial";



const Home = () => {


    useEffect(() => {

        sessionStorage.setItem("EmployeeUser", "");
        sessionStorage.setItem("adminUser", "");
        sessionStorage.setItem("customerEmail", "");
        sessionStorage.setItem("dboyUser", "");

    }, []);


    return (
        <div className='text-white'>
            <Navbar bg="dark" expand="lg">
                <Container className="text-white">
                    <Navbar.Brand href="/" className="text-white">Courier Express</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-white">
                            <Nav.Link className="text-white" href="/Login" > User Login </Nav.Link>
                            <Nav.Link className="text-white" href="/CustomerLogin"> Customer Login</Nav.Link>
                            <Nav.Link className="text-white" href="#About"> About Us </Nav.Link>
                            <Nav.Link className="text-white" href="#mv"> Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <div style={{
                backgroundImage: `url("https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?cs=srgb&dl=pexels-george-dolgikh-1303081.jpg&fm=jpg")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '120vh',


            }}>
                <div className="col-7" style={{ fontFamily: "Brush Script MT" }}>
                    <br /><br /><br /> <br />
                    <h1 className='display-5 ' >Courier Express </h1><br /> <br />
                    <p >
                        <h1>Building the best last mile delivery software in the world</h1>
                        Courier Express was founded in 2022 by a team of CDAC engineers fresh out of CDAC Center prestigious Start accelerator program.
                        The founders, who started  the company , set out to build the best last
                        mile delivery software in the India. Today, Courier Express powers millions of deliveries every month
                        for thousands of Customer around the India.
                    </p>
                </div>
                {/* <br /><br /><br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}


            </div >
            <br /><br />
            <AboutUs />
            <br /><br />
            {/* <FlipCards />
            <br /><br /> */}
            <VisionMission />
            <br /><br />
            {/* <Testimonial /> */}

            <br /><br />
            <Footer />
        </div >
    );
};

export default Home;