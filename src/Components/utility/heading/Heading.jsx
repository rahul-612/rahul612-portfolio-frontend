import React from 'react'
import "./heading.css"
import underlineImg from "../images/heading_underline.webp"

const Heading = ({topic}) => {
  return (
    <div className="section_heading">
        <h1><span>{topic}</span></h1>
        <span className="heading_underline">
            <img src={underlineImg} alt="" />
        </span>
    </div>
  )
}

export default Heading