import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {getById,updateTodos} from "../Redux/AppReducer/action"


const EditTodo = () => {
  const dispatch=useDispatch()
  const params=useParams();
  const User=JSON.parse(localStorage.getItem("profile")) || "";
  const token=User.token;
  const [data,setData]=useState({})

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

 },[])

 const handleUpdate=()=>{
  const id=params.id
  const payload={
   data: {Authorization:`Bearer ${token}`},
   updat:{},
   id:id
  }
  dispatch(updateTodos(payload)).then((res)=>{
    console.log(res.payload)
  })
 }
  console.log(data)
  return (
    <div>
       <form>
        <label>Title</label>
        <input value={data.title}></input>
        <label>Status</label>
      
       </form>
    </div>
  )
}

export default EditTodo