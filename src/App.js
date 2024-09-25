import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


//let name=  " Devansh is learning react!!"
function App() { // sing the functional compnent in react 
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert= (message, type ) =>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{ // it is used to disapper the alert automaticaly after 3 sec . by using setTimeout function
      setAlert(null);
    },3000);
    
  }
  

  const toggleMode =() =>{  
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor= '#031b3f'; // ths is used to establsh the dark color to bakcground
      showAlert("Dark mode has been Enabled", "success");
      //document.title='TextUtils - Darkmode' // this will represent the this title , when dark mode in enabled 

      // By using the interval method we can blink the title
      setInterval=(() =>{ // this will automatically update the title after seconds 
        document.title ='Textutisl is Amazing'; 
      } ,2000 );
      setInterval=(() =>{
        document.title ='Installl TextUtils Now';
      } ,1500 );
    } 
    else{
      setmode ('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been Enabled", "success");
      //document.title='TextUtils - Lightmode' // this will represent the this title , when light mode in enabled 
    }
  }

  return (
    <> 
    <Router>
<Alert alert = {alert}/>
<Navbar title = "TextUtils"  mode= {mode} toggleMode ={toggleMode}/>
<div className="container my-3 " // it is a class in bootstrap the automatically implement the css ,also my-3 will put margin on y axis
> 
 <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          {/* {exact is used to verify the exact path of the component } */}
          <Route exact path="/"
          element={<TextForm  showAlert={showAlert} heading = " Enter your Text Here"  mode= {mode}/>}>
          </Route>
  </Routes>
</div>
</Router>
  </>

  );
}
export default App;