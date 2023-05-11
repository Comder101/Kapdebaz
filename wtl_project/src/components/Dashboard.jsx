import React, { Component} from 'react';
import Display from './Display';
import Settings from './Settings';
import { useState } from 'react';
import {storage} from './firebaseconfig'

import "../styles/display.scss";
import "../styles/settings.scss";
import "../styles/dashboard.scss";
// import { upload } from '@testing-library/user-event/dist/upload';


export default class Dashboard extends Component
{
  
  state={
    hoodiecolor :'VB9pD3c/purplehoodie.png',
    uppertext:'This is upper text',

    lowertext:'This is lower case',
    url:'',
    textSize:33,
    textColor:'white'
  }
  handlehoodieColor=(e)=>{
    this.setState({hoodiecolor:e.target.id});
  }

  handleUpperText = (e) =>{
    this.setState({uppertext:e.target.value});
  }
  handleLowerText = (e) =>{
    this.setState({lowertext:e.target.value});
  }
  handletextSize=(e)=>{
    this.setState({textSize:e.target.value});
  }
  formatText(){
    const size = this.state.textSize;
    return parseInt(size);
  }
  handletextColor = (e) =>{
    this.setState({textColor:e.target.value})
  }
  handleImageUpload =(e) =>{
    
    if(e.target.files[0]){
      const image = (e.target.files[0]);
      
    storage.ref('/images/'+image.name).put(image)
    .on("state_changed" ,alert("success"), alert ,()=>{
      

        storage.ref("images").child(image.name).getDownloadURL()
        .then(url=>{
          this.setState({url});
        })
      
    });
    }

  }
  
  render()
  {
    return (
      <div className="container">
          <div className="display">
  
          <Display display={this.state}
            textFormat = {this.formatText()}
          />
          </div>
          <div className="settings">
  
          <Settings
            color={this.handlehoodieColor}
            uppertext={this.handleUpperText}
            lowertext={this.handleLowerText}
            uploadImage={this.handleImageUpload}
            textSize= {this.handletextSize}
            textColor={this.handletextColor}

          />
          </div>
      </div>
    )
  }
}
