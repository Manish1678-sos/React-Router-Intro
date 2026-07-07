import './App.css';

import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,

}from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

  }, 1500);
  
  }
const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor='#042746';
    showAlert("Dark mode has been enabled","success");
    document.title="Textutils=Dark Mode";
    setInterval(()=>{
      document.title="Textutils is amazing";
    }, 2000);
    setInterval(()=>{
      document.title="Install textutils";
    },1500);

  } else {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title="Textutils=Light Mode";
  }
}  

  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About Us"/>*/}
      {/*<Navbar/>*/}
      {/*<Navbar title="TextUtils" mode={darkMode} setMode={setDarkMode}/>*/}
      
      <Router>
        <Navbar title="TextUtils"mode={mode} aboutText="About"  toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
      </Routes>
      </div>
      </Router>

      
      
    </>
  );
}

export default App;