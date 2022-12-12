import React,{useState,useEffect} from 'react'
import "./contact.css";
// import Lines from '../utility/lines/Lines';
import Heading from '../utility/heading/Heading';
import { useDispatch,useSelector } from "react-redux";
import {sendMessage} from "../../action/action.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const dispatch=useDispatch();
    const { error, message, loading } = useSelector(
        (state) => state.user
      );
        // console.log(message)
const [fData,setFData]=useState({
    name:"",
    email:"",
    msg:""
})

const inputEvent=(e)=>{
    const {name,value}=e.target;

    setFData((preValue)=>{
        return{
            ...preValue,
            [name]:value
        }
    })

}

const submitForm=(e)=>{
    e.preventDefault();

    dispatch(sendMessage(fData.name,fData.email,fData.msg));

    setFData({name:"",
    email:"",
    msg:""})
}

useEffect(() => {
    if (error) {
        toast.error(error, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      
    }

    if (message) {
        toast.success('Mail Sent Successfully', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
  }, [dispatch, error, message]);

  return (
    <section id="contact">
        {/* <Lines/> */}
        <Heading topic="Get In Touch"/>
        <div className="contactContainer flex">
            <form action="" className="contactForm" onSubmit={submitForm}>
            <div className="inputBox">
                            <input type="text" name='name' autoComplete="off" value={fData.name} onChange={inputEvent} required />
                            <label htmlFor="name">name</label>
                        </div>

                        <div className="inputBox">
                            <input type="email" name='email' autoComplete="off" value={fData.email} onChange={inputEvent} required />
                            <label htmlFor="email">email</label>
                        </div>
                        <div className="inputBox">
                            <textarea name="msg" cols="71" rows="8" value={fData.msg} onChange={inputEvent} autoComplete="off" required></textarea>
                            <label htmlFor="msg">Message</label>
                        </div>
                        <input type="submit" name="" value="Send Message" />
            </form>
            <div className="contactInfo">
                <div className="cInfo">
                    <span className="cLabel">Email</span>
                    <p className="cValue">rk785164@gmail.com</p>
                </div>
                <div className="cInfo">
                <span className="cLabel">Phone</span>
                    <p className="cValue">9650567843</p>
                </div>
                <div className="cInfo">
                <span className="cLabel">Address</span>
                    <p className="cValue">Dwarka, New Delhi 110043</p>
                </div>
            </div>
        </div>
        <ToastContainer
position="bottom-center"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme='dark'
/>
    </section>
  )
}

export default Contact