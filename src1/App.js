import logo from './logo.svg';
import './App.css';
import Register from "./Admin/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DboyLayout from './DeliveryBoy/DboyLayout';
import DboyCouriers from './DeliveryBoy/DboyCouriers';
import ViewUsers from './Admin/ViewUsers';
import ViewEmployees from './Admin/ViewEmployees';
import ViewDeliveryboys from './Admin/ViewDeliveryboys';
import AdminLayout from './Admin/AdminLayout';

import Login from "./Login";
import EmployeeLayout from './Employee/EmployeeLayout';
import IncomingCouriers from './Employee/IncomingCouriers';
import OutgoingCouriers from './Employee/OutgoingCouriers';
import ViewDboys from './Employee/ViewDboys';
import UpdateUser from './Admin/UpdateUser';
import EmployeeCourierUpdate from './Employee/EmployeeCourierUpdate';
import ViewProfile from './Employee/ViewProfile';
import UpdateProfile from './Employee/UpdateProfile';
import DboyStatusUpdate from './DeliveryBoy/DboyStatusUpdate';
import DboyUpdateProfile from './DeliveryBoy/DboyUpdateProfile';
import DboyProfile from './DeliveryBoy/DboyProfile';
import ForgotPassword from './ForgotPassword';

import CustomerLayout from "./Customer/CustomerLayout";
import CourierBooking from "./Customer/CourierBooking";
import CourierTracking from "./Customer/CourierTracking";
import UpdateBookingDetails from "./Customer/UpdateBookingDetails";
import CustomerFeedback from "./Customer/CustomerFeedback";
import ShowData from "./Customer/ShowData";
import Home from './HomePage/Home';
import CustomerLogin from './Customer/CustomerLogin';
import CustomerRegister from "./Customer/CustomerRegister";
import CustomerHome from './Customer/CustomerHome';
import EmployeeHome from "./Employee/EmployeeHome";
import Footer from './HomePage/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home /></>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/CustomerLogin" element={<CustomerLogin />}></Route>
          <Route path="/CustomerRegister" element={<CustomerRegister />}></Route>


          <Route path="/Admin" element={<AdminLayout />}>
            <Route index element={<ViewUsers />} ></Route>
            <Route path='Register' element={<Register />}></Route>
            <Route path='ViewUsers' element={<ViewUsers />}></Route>
            <Route path='ViewEmployees' element={<ViewEmployees />} ></Route>
            <Route path='ViewDeliveryboys' element={<ViewDeliveryboys />} ></Route>
            <Route path='update' element={<UpdateUser />} ></Route>
          </Route>


          <Route path="/Employee/" element={<EmployeeLayout />}>
            <Route index element={<EmployeeHome />} ></Route>
            <Route path='IncomingCouriers' element={<IncomingCouriers />}></Route>
            <Route path='OutgoingCouriers' element={<OutgoingCouriers />}></Route>
            <Route path='ViewDboys' element={<ViewDboys />}></Route>
            <Route path='update' element={<EmployeeCourierUpdate />}></Route>
            <Route path='viewProfile' element={<ViewProfile />}></Route>
            <Route path='updateProfile' element={<UpdateProfile />}></Route>
          </Route>


          <Route path="/Dboy/" element={<DboyLayout />}>
            <Route index element={<DboyCouriers />} ></Route>
            <Route path='DboyStatusUpdate' element={<DboyStatusUpdate />}></Route>
            <Route path='DboyProfile' element={<DboyProfile />}></Route>
            <Route path='DboyUpdateProfile' element={<DboyUpdateProfile />}></Route>

          </Route>


          <Route path="/Customer/" element={<CustomerLayout />}>
            <Route index element={<CustomerHome />} ></Route>
            <Route path="/Customer/CourierBooking" element={<CourierBooking />}></Route>
            <Route path="/Customer/ShowData" element={<ShowData />}></Route>
            <Route path="/Customer/CourierTracking" element={<CourierTracking />}></Route>
            <Route path="/Customer/UpdateBookingDetails" element={<UpdateBookingDetails />}></Route>
          </Route>



        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
