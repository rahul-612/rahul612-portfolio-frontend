import axios from "axios";

export const sendMessage=(name,email,msg)=>async(dispatch)=>{
    try{
        dispatch({type:"sendMsgRequest"});

        const {data} =await axios.post("https://rahul612-portfolio-api.onrender.com/sendMsg",{name,email,msg},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({type:"sendMsgSuccess",payload:data.message})
    }catch(error){
        dispatch({type:"sendMsgFailure",payload:error.response.data.message})
    }
}