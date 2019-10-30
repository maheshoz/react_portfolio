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
      <h1>Contact me through:</h1>
      <div className="mail">

        <p >email : <br/> <br/> <span className="gmail" >maheshcn31@gmail.com</span>  </p>
       
            Or Connect on <Link to='https://www.linkedin.com/in/mahesh-k-192194191/'> <p className="linked-in"> Linked In</p></Link>
            <br/>
            
      </div>
    </div>
        <MobileNav/>
      </div>
    );
  }
}


export default Contact;