import axios from 'axios';
import React from 'react'
import {useState} from 'react'
// import axios from 'axios';
import '../styles/settings.scss'


const Settings = ({color,uppertext,lowertext,uploadImage,textSize,textColor}) => {
  const [image,setImage] = useState(null);
  const uploadFile =()=>{
    if(image.name == null)
    {
      return <div>Loading....</div>
    }
    else{

      console.log(image.name);
    }
  }

  
    




    const [alertval, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }


    const [catobj, setcatobj] = useState({ uppertext: '', lowertext: ''});
    const [isToggled, setisToggled] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(catobj+" "+isToggled)
        if(catobj.category===''){
            alert("Please fill all the fields");
            return;
        }
        else{    
            catobj.color===""?catobj.color="#000000":catobj.color=catobj.color; 
            axios.post("./api/custom/",{
                uppertext: catobj.uppertext,
                lowertext: catobj.lowertext,
                
            })
            .then((response)=>{
                showAlert("Category Added Successfully","success")
                console.log(response);
                setcatobj({ uppertext: '',lowertext:'', color: ''}); 
            })
            .catch((error)=>console.log(error))
        }

  }
    
  

  return (
    
      <div className="change">
      <h3 className="text-center">Settings</h3>
      <h4>Change Hoodie Color</h4>
      <div className='hoodie-color'>
        <img onClick={color} src="https://i.ibb.co/TwNBT0r/bluehoodie.png" alt='blue hoodie' id="TwNBT0r/bluehoodie.png"/>
        <img onClick={color} src="https://i.ibb.co/26VC6QP/whitehoodie.png" alt='white hoodie' id="26VC6QP/whitehoodie.png"/>
        <img onClick={color} src= "https://i.ibb.co/VB9pD3c/purplehoodie.png"alt='purple hoodie' id="VB9pD3c/purplehoodie.png"/>
      </div>
      <h4></h4>
      <h4></h4>
      
      <h4>Write Text</h4>
      <input onChange={uppertext} type="text" className="uppertext" placeholder="Upper-text"></input>
      <h4></h4>
      <input onChange={lowertext} type="text" className="lowertext" placeholder="Lower-text"></input>
      <h4></h4>

      <h4>Upload Image</h4>
      <input type="file" className='image' id="image-upload"
      accept="image/*"
      onChange={uploadImage}
      />
      <button className="button" onClick={uploadFile}>Upload</button>
      <br/>
      
      <h4>Text-size</h4>
      <input className="slider" onChange={textSize} type="range" min="12" max="33"/>

      <h4>Text-color</h4>
      <select onChange={textColor}className='text-color'>
        <option>White</option>
        <option>Black</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
      <h4></h4>
      <button className='button' onClick={handleSubmit}>Save</button>
    </div>
    
    
  )
}

export default Settings