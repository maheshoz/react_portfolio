import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="skills_page">
          <h1> I can work on:</h1>
          <div className="web_mobile">
            <div className="web card scale-up"> Web Development</div>
            <div className="mobile card scale-up ">Mobile Development</div>
          </div>
          <h2>I&#39; am proficient in:</h2>
          <div className="tech slide-in-right">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>SCSS</p>
            <p>Javascript</p>

            <p>Jquery</p>
            <p>Bootstrap.css</p>
            <p>Responsive Web Design</p>
            <p>DevTools</p>
            <p>Website Optimization</p>
            <p>Web Accessability</p>
            <p>React.js</p>
            <p>React Router</p>
            <p>Progressive web apps</p>
            <p>CSS Frameworks</p>
            <p>PSD to HTML</p>
            <p>GIT</p>
            <p>Github</p>
            <p>VS code</p>
            <p>Terminal</p>
            <p>SEO</p>
            <p>UI/UX design</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            <p>Adobe XD</p>
            <p>Figma</p>
            <p>Design thinking</p>
          </div>
          <h2>I&#39; am familiar with:</h2>
          <div className="tech slide-in-right mb-2rem">
            <p>Android</p>
            <p>Java</p>
            <p>python</p>
            <p>PHP</p>
            <p>SQL</p>
            <p>ES6</p>
            <p>Node.js</p>
            <p>Material ui</p>
            <p>Angular</p>
          </div>
        </div>
        <MobileNav />
      </div>
    );
  }
}

export default Skills;
