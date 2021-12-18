import React from 'react';
// import logo from './logo.svg';
import './App.css';
const details = {
  name: "Satheesh",
  employeeid: 175145,
  "Appointment_On": "10:00 (25/12/2021)",
 
  Email: "satheesh@mail.com",
  phone_no: +65656356,
  prodductimg: 'https://www.w3schools.com/images/w3lynx_200.png',
  prodductname: "Title of the product",
  prodductinfo: "dijier wiejerie r oewod d klwkfldfdsfl eorkesodkf ewkeldskflwesdk dsokrwelsdk iejerie r oewod d klwkfldfdsfl eorkesodkf ewkeldskflwesdk dsokrwelsdk",
  'Status': "In Progress",
  'Door' : "Mark",
  'time': "10:00 (26/11/2021)",
  'right-arrow': ">"
}
var arrow = "<"

function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <header>
        <div className="arrow">
          <strong>{arrow}</strong>
        </div>
        <div className="name">
          <strong>{details.name}</strong>
          <label>{details.employeeid}</label>
        </div>
        <button className="button">print</button>
      </header>
      <div className="customer-info">
        <div>
          <strong>Appointment On</strong>
          <label>{details.Appointment_On}</label>
        </div>
        <div>
          <strong>Email: </strong>
          <label>{details.Email}</label>
        </div>
        <div>
          <strong>Phone no </strong>
          <label>{details.phone_no}</label>
        </div>
        </div>
        <div className="order-info">
          <div className="f1">
            <strong>Status</strong>
            <label>{details.Status}</label>
          </div>
          <div className="f2">
            <strong>Door</strong>
            <label>{details.Door}</label>
          </div>
          <div className="f3">
            <strong>Time</strong>
            <label>{details.time}</label>
          </div>
        </div>
      <div className="product-list">
        <div>
        <input type="checkbox"/>
        </div>
        <div>
        <img src={details.prodductimg} alt="product_img" height="100" width="100"/>
        </div>
        <div>
          <p>
        <strong>{details.prodductname}</strong>
        <p>{details.prodductinfo}</p>
        </p>
        </div>
        <a href="#" >{details['right-arrow']}</a>
      </div>
    </div>
  );
}
export default App;