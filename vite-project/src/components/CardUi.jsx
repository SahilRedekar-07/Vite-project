import React from 'react'
// import { Bookmark } from 'lucide-react'
const CardUi = (props) => {
  return (
    <div className="Parent">
      <div className="container">

        <div className="top">
          <img src={props.img} alt="" />
          <button>Save </button>
        </div>
        <div className="mid">
          <h3>{props.title}</h3>
          <h6>{props.posted}</h6>
        </div>
        <div>
          <h3>{props.description}</h3>
          <div className="inner-mid"> 
            <h4>{props.jobType}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        <div className="buttom">
          <div className="buttom-txt">
            <h3>{props.salary}</h3>
            <h6>{props.location}</h6>
          </div>
          <button>Apply Now!</button>
        </div>
      </div>
    </div>
  )
}

export default CardUi