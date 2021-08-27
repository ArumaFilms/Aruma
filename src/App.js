import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import TextUtilies from './Components/TextUtilies';
import Alert from './Components/Alert';

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
      <Navbar title="Aruma Films"/>
      <Alert  alert= {alert}/>
      <div className="container">
        <TextUtilies heading="Enter the text" showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
