import React from "react";
import './landing.css';
import {Link} from 'react-router-dom';

export default function Landing_Page(){
        return(
        <div className="landing">
            <div className="login-img">
                <img src="https://images.pexels.com/photos/6270377/pexels-photo-6270377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cover-img"/>
            </div>
            <div className="login">
               
                <label>10X Team 04</label>
                <button><Link to='postview' >Enter</Link></button>
               
            </div>
        </div>
        )
}