import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Dashboard from "./components/Dashboard";
import { useState } from 'react';
import {storage} from './components/firebaseconfig'
import Homepage from "./components/Homepage";
import Projects from "./components/project/Projects";

import"./styles/App.scss"
import "./styles/Navbar.scss"
function App() {
  const[image, setImage] = useState('');
  const [Url,setUrl] = useState('');

  const upload =()=>{
    if(image == null) return;
    setUrl("Getting Url link")
    storage.ref('/images/'+image.name).put(image)
    .on("state_changed" ,alert("success"), alert ,()=>{

      storage.ref("images").child(image.name).getDownloadURL()
      .then((url)=>{
        setUrl(url);
      })
    });

    
  }
  return (
    
      <Router>
        <Navbar/>
        {/* <Homepage/> */}
        <Dashboard/>
        <Projects/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        
        </Routes>
      </Router>
        
    
  );
}

export default App;
