import React from 'react'
import "./services.css";
import "./services_res.css";
// import Lines from '../utility/lines/Lines';
import Heading from '../utility/heading/Heading';
import SData from './serviceData';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView, entry } = useInView({threshold: 0,triggerOnce:true});

  return (
    <section id="services">
      {/* <Lines/> */}
      <Heading topic="My Services"/>
      <div className="mainServiceContainer" ref={ref}>
        {SData.map((elem,index)=>{
          return(
            <div className={inView?"serviceCard animated animatedFadeInUp fadeInUp":""} key={index}>
    <figure className="sCardIcon">
      <img src={elem.img} alt="sCard" width="45"/>
    </figure>
    <h3 className="sCardHeading">
      {elem.topic}
    </h3>
    <p className="sCardDesc">{elem.desc}</p>
</div>
          )
        })}
       
      </div>
    </section>
  )
}

export default Services