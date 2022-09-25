import React from 'react'
import Heading from '../utility/heading/Heading';
// import Lines from '../utility/lines/Lines';
import "./about.css";
import "./about_res.css";
import aboutImg from "../utility/images/about.jpg"
import { useInView } from 'react-intersection-observer';
import resume from "../utility/Resume.pdf";

const About = () => {
  const { ref, inView, entry } = useInView({threshold: 0,triggerOnce:true});

  return (
    <>
        <section id="about">
        {/* <Lines/> */}
        <Heading topic="About Me"/>
        <div className="mainAboutContainer flex"  >
          <div className="mainImgContainer" ref={ref} >
            <figure className="dotted_bg">
              {/* <div className="reveal_wrap">
              <span className="cover"></span> */}
              <div className={inView===true?'cardOuterAni':""}></div>
              <div className={inView===true?"cardAniInfo":""}>
                <div className="reveal_content" style={inView?{opacity:'1'}:{opacity:'0'}}>
                  <img src={aboutImg} alt="" className='about_img' />
                </div>
              </div>
            </figure>
          </div>
          <div className="mainInfoContainer flex" >
            <h3 >"We can make it together"
            <span className={inView===true?"cover textAni":"cover"}></span></h3>
            <p className='aboutPara'>Hi, My name is Rahul Kumar, I'm from New Delhi, I have a good knowledge of full stack development.
            I have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer.
            <span className={inView===true?"cover textAni":"cover"} ></span>
            </p>
            <p className='aboutPara'>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
           <a href="#contact" > Let's make something special.</a>
           <span className={inView===true?"cover textAni":"cover"}></span>
</p>
            <a href={resume} className=' aboutBtn' download>Download my CV 
            <span className={inView===true?"cover textAni":"cover"} ></span></a>
          </div>
        </div>
        </section>
    </>
  )
}


export default About