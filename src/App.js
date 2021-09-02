import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import TextUtilies from './Components/TextUtilies';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Footer from './Components/Footer';

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
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/Aruma">
                <Home/>
              </Route>
              <Route exact path="/TextUtilies">
                <TextUtilies heading="TextUtilies | lowercase <-TO-> UPPERCASE | Remove Extra Space" showAlert={showAlert}/>
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
