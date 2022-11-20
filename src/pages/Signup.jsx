import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import { HeadingWrapper, InputWrapper, NavLink, SignupWrapper, SubmitWrapper } from '../styles/signup.style'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {signup} from "../Redux/AuthReducer/action"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [last,setLast]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const {isError,isLoading}=useSelector((state)=>{return {isError:state.AuthReducer.isError,isLoading:state.AuthReducer.isLoading}})


 

  const handleSubmit=(e)=>{
    
    const payload={
      first_name:name,
      last_name:last,
      email:email,
      password:password
    }
    e.preventDefault();
    if(name && last && email && password){
       dispatch(signup(payload)).then((res)=>{
        let resp=(res.payload.data.mesg)
        toast.success(resp,{
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
         setTimeout(()=>{
          navigate("/login")
         },2200)
        
       }).catch((err)=>{
        console.log(err)
       })
    }

  }

  return (
         <div>

        
        {isLoading ?<img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img> :<SignupWrapper>
       
        <HeadingWrapper><h1>Sign Up</h1></HeadingWrapper>
         <form onSubmit={handleSubmit}>
          <InputWrapper>
         
          <label>First Name</label><br/>
           <input value={name} type="text" onChange={(e)=>setName(e.target.value)}></input>
           <label>Last Name</label><br/>
           <input value={last} type="text" onChange={(e)=>setLast(e.target.value)}></input>
           <label>Email</label><br/>
           <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)}></input>
           <label>Password</label><br/>
           <input value={password}  type="text" onChange={(e)=>setPassword(e.target.value)}></input>
           <SubmitWrapper>
           <input type="submit"></input>
           </SubmitWrapper>
           
          </InputWrapper>
          
         </form>
         <h5>Already have an account ?<NavLink to="/login">Sign In</NavLink></h5>
         <ToastContainer/>
      </SignupWrapper>}

      </div>
  
  )
}

export default Signup
