import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

import {Link } from "react-router-dom";


import './Contact.css';


class Contact extends Component {
  render(){
    return(
      <div>
        <Navbar/>
        <div className="contact_page scale-up">
      <h1>Let's Connect on:</h1>
      <div className="mail">
             <a href="https://www.linkedin.com/in/mahesh-k-192194191/" target="_blank"> <p className="linked-in"> Linked In</p></Link>
            <br/>
            
      </div>
    </div>
        <MobileNav/>
      </div>
    );
  }
}


export default Contact;
