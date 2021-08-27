import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contract'
import TextUtilies from './Components/TextUtilies';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}
    
  return (
    <>
      <Router>
        <Navbar title="Aruma Films"/>
        <Alert  alert= {alert}/>
        <div className="container">
          <Switch>
              <Route exact path="/Home">
                <Home/>
              </Route>
              <Route exact path="/TextUtilies">
                <TextUtilies heading="Enter the text" showAlert={showAlert}/>
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
