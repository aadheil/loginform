import React, { useEffect, useState } from 'react'
import './login.css'
function Login() {
    const [username,setUsername]=useState("abc")
    const [password,setPassword]=useState("octobersky")
    const[userinputusername,setUserinputusername]=useState("")
    const[userinputpassword,setUserinputpassword]=useState("")
    const[userinputcaptch,setUserinputcaptch]=useState("")
    const [captcha1,setCaptcha1]=useState()
    const[captch2,setCaptch2]=useState()
    const[captcharesult,setCaptcharesult]=useState()
    const [plusbutton,setplusbutton]=useState(false)
    
    const handlelogin = ()=>{
        console.log(userinputusername);
        console.log(userinputpassword);
        console.log(userinputcaptch);
        // alert(captcharesult)
        if(userinputusername && userinputpassword && userinputcaptch){
        if(userinputcaptch==captcharesult){
            if(userinputusername==username&&userinputpassword==password){
                alert("Login Successfull")
            }
            else{
                alert("Login Failed !!! Invalid Username or Password")
            }
        }
        else{
            alert("Captcha Verification Failed")
        }
    }

    else{
        alert("Please Fill The Form Completely")
    }


    }

        const handlecaptcha =()=>{
            setplusbutton(true)
          var random1 =Math.floor(Math.random() * 10)
          var random2=  Math.floor(Math.random() * 10)
          setCaptcha1(random1)
          setCaptch2(random2)
          
            var result = random1+random2
           
            setCaptcharesult(result)
            
    }


    

    


  return (

    <div className='bgforall d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
        
        <div className='loginbackground d-flex bg-transparent shadow flex-column justify-content-center align-items-center' style={{width:'450px',height:'550px'}}>
        <h3 className='text-center mt-4 fw-bolder'>Login Form</h3>
           <div><input type="text" className='form-control mt-5' placeholder='Enter Username' onChange={e=>setUserinputusername(e.target.value)} required/></div>
           <div><input type="password" className='form-control mt-4' placeholder='Enter Password' onChange={e=>setUserinputpassword(e.target.value)}/></div>

           <div><div className='text-light mt-4 text-center d-flex text-center justify-content-center' style={{}}><button className='btn btn-outline-dark' onClick={handlecaptcha}>Generate Captch</button> <p className='text-light ms-4'>{captcha1} {plusbutton&&"+"} {captch2}</p></div></div>

           <div><input type="text" className='form-control mt-4' placeholder='Enter Captcha' onChange={e=>setUserinputcaptch(e.target.value)}/></div>
           <div><button className='btn btn-outline-dark mt-5' onClick={handlelogin}>Login</button></div>



        </div>
    </div>
  )
}

export default Login