import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
   <Router>
     <div>
       <Route exact path='/' component={Home}/>
       <Route  path='/about' component={About}/>
       <Route  path='/portfolio' component={Portfolio}/>
       <Route  path='/skills' component={Skills}/>
       <Route  path='/contact' component={Contact}/>
     </div>
   </Router>
  );
}

export default App;
