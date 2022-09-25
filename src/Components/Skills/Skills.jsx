import React from 'react'
import Heading from '../utility/heading/Heading';
// import Lines from '../utility/lines/Lines';
import "./skills.css";
import "./skills_res.css";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const SkillData=[{
    topic:"HTML/CSS",
    number:99
},{
    topic:"React JS",
    number:96
},{
    topic:"Mern",
    number:92
},{
    topic:"Design",
    number:100
}]

const Skills = () => {
    const { ref, inView, entry } = useInView({threshold: 0,triggerOnce:true});

  return (
    <section id="skills">
        {/* <Lines/> */}
        <Heading topic="My Skills" />
        <div  className={inView?"skillContainer flex animated animatedFadeInUp fadeInUp":"skillContainer flex"} ref={ref}>
       
        {SkillData.map((elem,index)=>{
            return(
                <div className="skillCard flex" key={index}>
                <div className="numberCount">
                    <span className="number" id="skillNum">{inView?<CountUp duration=".8" end={elem.number}/>:null}</span>
                    <span className="percent">%</span>
                </div>
                <h4 className="skillTopic">{elem.topic}</h4>
            </div>
            )
        })}
        
        </div>
    </section>
  )
}




export default Skills