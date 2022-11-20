import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {getById,updateTodos} from "../Redux/AppReducer/action"
import { EditTodoWrapper } from '../styles/edittodo.styled';


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
  
  if(title!==""){
    console.log(title,status)
    const payload={
      data: {Authorization:`Bearer ${token}`},
      updat:{title:title,
             status:status
     },
  
      id:id
     }
     dispatch(updateTodos(payload)).then((res)=>{
       console.log(res.payload)
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

  
   const handleEdit=(e)=>{
    e.preventDefault()
    setTitle(data.title)
    setStatus(data.status)
    setShow(!show)
   }
 

  return (
   
      <EditTodoWrapper>
       
         
        <div className='main-edit-div'>
         {/* {!show && <div className="heading-div"> */}
         {/* <h3 className="editTitle">Title <br/> <span className="edit-span">{data.title}</span></h3>
         <h3 className="editTitle">Status</h3>
         <h4 className="status-heading">{data.status? "Done" : "Not Done"}</h4> */}
        
         {/* </div>} */}
       {  !isLoading && <div className="form-div">
         <form className="edit-form">
          <label className="editTitle">Title</label><br/>
          {!show?<h1>{data.title}</h1> : <input value={title} onChange={(e)=>setTitle(e.target.value)} ></input>}
          <br/>
          <label className="editTitle">Status</label><br/>
          <h5 className="status-heading"> {status ? "Done" : "Not Done"}</h5><button onClickCapture={(e)=>e.preventDefault()} onClick={()=>setStatus(!status)} className="edit-button">Toggle Status</button>
     
          
          <button onClick={handleUpdate}   className="edit-button">Save</button>
          <button className="edit-button"  onClick={handleEdit}>Edit</button>
          </form>
           </div>}
          


     
        </div>
       </EditTodoWrapper>
      
   
  )
}

export default EditTodo