//import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
//import {
 // BrowserRouter as Router,
  //Switch,
  //Route,
  //Link
//} from "react-router-dom";


function App() {
   const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }
   const toggleMode = ()=>{
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled ", "Success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ", "Success");
    }
   }
   
  return (
    <>
    {/*<Router>*/}
      <Navbar Title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/*<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">*/ }
          <Textform showAlert={showAlert}  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} /> 
          {/*</Route>
        </Switch>*/}
        </div>
       {/* </Router>*/}
    </>
  );
}

export default App;
