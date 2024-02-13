// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, Switch
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Services from './Services/Services'; 
import About from './about/about'; 
import Contact from './Contact/Contact'; 
import Login from './Login/Login'; 
import Signup from './Login/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
