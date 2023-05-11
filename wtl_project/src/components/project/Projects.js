import React, { Component } from "react";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";
class Projects extends Component {
  render() {
    const {designs} = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="project-list">
            {designs && designs.map(design=>{
              return(

                <ProjectList design={design} key={design.id}/>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

// const mapStatetoProps =(state) => {
//   return{

//     // designs: state.design.designs,
//     ...state
//   }
  
// }

export default Projects;
