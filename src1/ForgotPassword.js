import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from 'react-router-dom';

import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [correctEmail, setCorectEmail] = useState('');
    const [password, setPassword] = useState("");
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [data, setData] = useState([]);
    //const [user, setUser] = useState("");
    //const [arrow, setArrow] = useState(true);
    // const [comp, setComp] = useState(<LoginForm />)
    const [loginOrRegister, setLOR] = useState('Register Here');
    const [role, setRole] = useState("");
    const [para, setPara] = useState('');
    const { user } = useParams();
    const [action, setAction] = useState("Login");
    const [content, setContent] = useState("New to Our Website please Sign Up to access more Services");
    const [display, setDisplay] = useState(true);
    const [otherLogin, setOtherLogin] = useState("Management Login")
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [displayNewPass, setDisplayNewPass] = useState(false);
    const [opt, setOtp] = useState('');

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const [changeMsg, setChangeMsg] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }



    const changePassword = (event) => {
        event.preventDefault();
        console.log("in chage pass");
        if ((confirmPass === newPass)) {
            const newPass1 = {
                "email": email,
                "password": newPass,
                "otp": opt
            }
            console.log(newPass);
            axios.post("http://localhost:8080/changePassword", newPass1)
                .then((response) => {
                    if (response.status === 200) {
                        console.log("successfully changed password");
                        setChangeMsg(<div className="alert alert-success" role="alert">
                            password changed sucessfully please login with new password

                        </div>);

                        navigate("/");
                    }
                    else if (response.status === 204) {
                        console.log("password change failed")
                        setChangeMsg(<h6 className="text-danger">password changed failed please try again</h6>);
                    }
                })
        }
    }

    // useEffect(() => {
    //     console.log(newPass);
    // },[newPass, confirmPass])

    const authenticateCustomer = (event) => {
        event.preventDefault();


        console.log("authenticate User");
        const userCredentials = {
            "email": email,
            "password": password
        }

        const emailId = email;


        async function checkEmail() {
            await axios.get(`http://localhost:8080/checkEmail/${emailId}`)
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        setCorectEmail(<div class="alert alert-success" role="alert">
                            OTP has send to your mail
                        </div>)
                        setDisplayNewPass(true);
                    }
                    else if (response.status === 204) {
                        setCorectEmail(<div class="alert alert-danger" role="alert">
                            Check Your Email Id!!!!
                        </div>)
                    }
                })
                .catch((error) => {
                    console.log("in catch react")
                    console.log(error);
                })
        }
        checkEmail();


    }

    const setEmpAdminComp = (e) => {
        e.preventDefault();
        if (display) {

            setAction("");
            setRole("");
            // setComp(<EmpOrAdmin />);
            setDisplay(false);
        }
        else {
            setDisplay(true);
            if (loginOrRegister === "Register Here") {
                // setComp(<LoginForm />)
            }
            else {
                // setComp(<Register />)
            }
            setAction("Login");
            setRole("Customer");
        }
    }


    return (
        <div className="register">
            <div className="row vh-100">
                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3 className="welcomeColor"><strong>Welcome</strong></h3>

                    <br />
                </div>

                <div className="col-9 register-right backsidecolor" >
                    <div>
                        {/* {arrow && <BsCaretUpFill />} */}
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                        </div>
                        <br />    <br />
                        <div>
                            <div className="col-5 loginForm">
                                <div className="text-center">
                                    <h5 className="text-dark"><strong>Enter Registered Email ID</strong></h5><br />
                                    <span className="text-danger">{msg}</span>
                                    {correctEmail}
                                    <form onSubmit={authenticateCustomer} >

                                        <div>
                                            <input
                                                type="email"
                                                className="form-control text-center"
                                                id="emailId"
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter Email Id"
                                            />
                                        </div>
                                        <br />
                                        <div className='text-center'>

                                        </div>
                                        <hr />
                                        <div>{displayNewPass ? <p></p> :
                                            <button type="submit" className="btn btn-warning">Send OTP</button>
                                        }
                                        </div>
                                    </form>
                                    {changeMsg}
                                    {displayNewPass ?
                                        (<form onSubmit={changePassword}>
                                            <hr />
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-control text-center"
                                                    id="otp"
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    placeholder="Enter OTP*"
                                                />
                                            </div><br ></br>
                                            <div>
                                                <input
                                                    type="password"
                                                    className="form-control text-center"
                                                    id="newPass"
                                                    onChange={(e) => setNewPass(e.target.value)}
                                                    placeholder="Enter new Password*"
                                                />
                                            </div><br />
                                            <div>
                                                <input
                                                    type="password"
                                                    className="form-control text-center"
                                                    id="confirmNewPass"
                                                    onChange={(e) => setConfirmPass(e.target.value)}
                                                    placeholder="Confirm new Password*"
                                                />
                                            </div>
                                            <hr />
                                            <div>
                                                <button type="submit" className="btn btn-warning">Change Password</button>
                                            </div>
                                            <br />
                                        </form>)
                                        : <p></p>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;