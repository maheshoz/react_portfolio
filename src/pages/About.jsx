import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

import './About.css'


class About extends Component {
  render(){
    return(
      <div >
        <Navbar/>
        <div className="about_page scale-up">
      <h1>Hello there,</h1>
      <p>I am mahesh, I  completed my BTech graduation in CSE from VNRVJIET, currently looking for opportunities to work as a web developer. Iam mostly interested in UI/front end/React.js development. But, as a fresher, i am ready to work on other technologies too.  </p>
      <h3>I can do :</h3>
      <p>
        UI/UX DESIGN <br />
        ------UI/UX involves planning and iterating a site's structure and layout.It also involves creating Mobile mockups, Once the proper information  is in place, As a designer I can design the web/mobile mockups, wireframes, illustrations and prototypes which help the developers to have a clear state of mind on what has tobe done.
   
      </p>
      <p>
        FRONT END DEVELOPMENT <br />
        ------It is building out the visual components of a
        website using HTML, CSS , and Javascript. I can create user friendly, interactive and responsive layouts with pure css or any css framework. I can also use react.js to create SPA's; 
      </p>
      <p>
        ANDROID APP DEVELOPMENT <br />
        ------I am in the beginners level of Android Dev, there's more that i have to learn in android.
      </p>
      <p>
        FULL STACK DEVELOPMENT <br />
        -------I can use php with mysql for the backend of a web project.
      </p>
    </div>
        <MobileNav/>
      </div>
    );
  }
}


export default About;