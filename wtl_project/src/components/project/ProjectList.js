import React from 'react'
const imgBase ='https://i.ibb.co/TwNBT0r/bluehoodie.png'

const ProjectList = (design) => {
  return (
    <div className='centre'>
        <div className="cardbody">
            <img src={`${imgBase}${design}`} alt="t-shirt" className="img-fluid" />
            <p>{design.name}</p>
            <button className='primary-btn'>View Project</button>
        </div>
      
    </div>
  )
}

export default ProjectList
