import React from "react";
const employee = {
    name: 'Tom',
    location: 'New York',
    bloodGroup: 'B+',
    age: 28,
    profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
         }    
export default class About extends React.Component{
    render(){
        return(
            <div className="img-content">
                <img src={employee.profileImg} height="250px" width="250px"></img>
                <h1>{employee.name}</h1>
                <label>location</label><h2>{employee.location}</h2>
                <label>BloodGroup</label><h2>{employee.bloodGroup}</h2>
                <label>Age</label><h2>{employee.age}</h2>

            </div>
        )
    }
}