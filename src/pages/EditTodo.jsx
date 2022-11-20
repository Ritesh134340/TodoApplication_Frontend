import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {getById,updateTodos} from "../Redux/AppReducer/action"
import { EditTodoWrapper } from '../styles/edittodo.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTodo = () => {
  const dispatch=useDispatch()
  const params=useParams();
  const User=JSON.parse(localStorage.getItem("profile")) || "";
  const token=User.token;
  const [data,setData]=useState({})
  const [title,setTitle]=useState("")
  const [status,setStatus]=useState(false)
  const [show,setShow]=useState(false)
  const {isLoading}=useSelector((state)=>{return {isLoading:state.AppReducer.isLoading}})
  



 const handleUpdate=(e)=>{
  const id=params.id
  e.preventDefault()
  setTitle(data.title)
  setStatus(data.status)
  setShow(!show)
 
  if(title!=="" && show){
   
    const payload={
      data: {Authorization:`Bearer ${token}`},
      updat:{title:title,
             status:status
     },
  
      id:id
     }
     dispatch(updateTodos(payload)).then((res)=>{
      //  console.log(res.payload)
       const id=params.id;
  const payload={
   data:{Authorization:`Bearer ${token}`},
   id:id
  }

  dispatch(getById(payload)).then((res)=>{
   setData(res.payload.data)
  }).catch((err)=>{
   console.log(err)
  })   
  
       setShow(false)
       toast.success('Updated Successfully !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
     })
  }
  
 }
 useEffect(()=>{
   
  const id=params.id;
  const payload={
   data:{Authorization:`Bearer ${token}`},
   id:id
  }

  dispatch(getById(payload)).then((res)=>{
   setData(res.payload.data)
  }).catch((err)=>{
   console.log(err)
  })

},[params.id])

  
  return (
   
      <EditTodoWrapper status={status} show={show}>
      
         
        <div className='main-edit-div'>
        
       {  isLoading? <img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"50px"}}></img> : <div className="form-div">
         <form className="edit-form">
          <label className="editTitle">Title</label><br/>
          {!show?<h1 className="status-heading">{data.title}</h1> : <input value={title} onChange={(e)=>setTitle(e.target.value)} ></input>}
          <br/>
          <label className="editTitle">Status</label><br/>
          <h5 className="status-heading"> {status ? "Done" : "Not Done"}</h5>
          </form>
           </div>}
           <button onClickCapture={(e)=>e.preventDefault()} onClick={()=>setStatus(!status)} className="edit-button" id="toggle-button" disabled={!show? true:false}>Toggle Status</button>
          <button onClick={handleUpdate}  className="edit-button" id="edit-button-show">{!show? "Edit" : "Save Changes"}</button>


     
        </div>
        <ToastContainer/>
       </EditTodoWrapper>
      
   
  )
}

export default EditTodo