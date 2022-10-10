import {useRef, useEffect,useState} from "react";
import useReactToPrint from "react-to-print";
import axios from "axios";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Col, Divider, Row, Table } from 'antd';





const ShowData = () => {
    
   // const componenetRef = useRef();
   // const handleprint = useReactToPrint({

   //    content: () => componenetRef.current,
   //    documentTitle: "Invoice",
   //    onAfterPrint: () => alert("successfully printed ")
   // })

   const navigate = useNavigate();

   const [inputs, setInputs ] = useState([]);
   let rec = sessionStorage.getItem("RecMob");

  console.log(inputs);

  const viewCourier = () => {
   axios.get(`http://localhost:8080/findCourierByMob/${rec}`)
   .then(response =>{
    console.log(response.data);
    setInputs(response.data);
   } )
   .catch(error => {
    alert(error);
   });
  };


  useEffect( ()=>{

   viewCourier();
// eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);


 const generateInvoicePdf = () => {
   const input = document.getElementById('divToPrint');
   html2canvas(input)
     .then((canvas) => {
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'JPEG', 10, 10);
       // pdf.output('dataurlnewwindow');
       pdf.save("download.pdf");
       navigate("/customer");
     })
     ;
 }





  
 return <>
 
 
<h1>Welcome to details</h1>
{

// inputs.map( val => 
//    <>
   
//    <h6>Courier ID : {val.bid}</h6>
//    <h6>Receiver : {val.receiverName}</h6>
//    <h6>Receiver Address:{val.receiverAddress}</h6>
//    <h6>Courier Type:{val.courierType}</h6>
//       <h6>Date:{val.bookingDate}</h6>
      
//       <h6>Transaction ID:{val.payment.transactionId}</h6>
//       <h6>PayMode:{val.payment.payMode}</h6>
      
//       <h6>Amount:{val.amount}</h6>
//       {/* <h6>Courier Type:{val.courierType}</h6> */}
   
//    </>



//)
}


<div style={{ padding: 20 }}>
            <div id="divToPrint" 

              className="mt4 height=100% width=75% container"
          
            >
              <Row>
                <Col span={12}>
                  <Divider style={{ textAlign: 'center' }}><h4>Invoice</h4></Divider>
                </Col>
              </Row>

            
             
                  <h5>Invoice</h5>
                  {
                     inputs.map( val => 
                        <>
                  <div><h6>Courier ID : {val.bid}</h6></div>
                  <div><h6>Receiver : {val.receiverName}</h6></div>
                  <div><h6>Receiver Address:{val.receiverAddress}</h6></div>
                  <div><h6>Courier Type:{val.courierType}</h6></div>
                  <div><h6>Date:{val.bookingDate}</h6></div>
                  <div><h6>Transaction ID:{val.payment.transactionId}</h6></div>
                  <div><h6>PayMode:{val.payment.payMode}</h6></div>
                  <div><h6>Amount:{val.amount}</h6></div>
                  </>
                  
               )
               }
                
              

              <Row style={{ marginTop: 48, textAlign: 'center' }} className="text-primary">
                we are proud to serve you
              </Row>

              <Row style={{ marginTop: 48, textAlign: 'center' }}>

              </Row>
            </div>
            <div>
              <button className="btn btn-primary" onClick={() => generateInvoicePdf()}>Download PDF</button>
            </div>

            </div>


                </>;

};
export default ShowData; 