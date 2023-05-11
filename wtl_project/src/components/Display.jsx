import React from 'react'

import '../styles/display.scss'


const Display = ({display,textFormat}) => {
  
  return (
    <div className="card-content">
        <div className="imghoodie">
            <img className='img-responsive'
            src= {`https://i.ibb.co/${display.hoodiecolor}`}
            alt='img hoodie'/>
        </div>
        <div className='memetext'>

      <div className="uppertext">
      <p style={{fontSize:textFormat , color: display.textColor}}>{display.uppertext}</p>
      </div>
      <img src={`${display.url}`  || 'https://via.placeholder.com/400x300'} alt = "image"/>
      <div className="lowertext">
        <p style={{fontSize:textFormat, color: display.textColor}}>{display.lowertext}</p>
      </div>
        </div>
    </div>
  )
}

export default Display
