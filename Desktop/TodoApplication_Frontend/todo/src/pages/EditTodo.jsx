import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {getTodo,updateTodos} from "../Redux/AppReducer/action"


const EditTodo = () => {
  const dispatch=useDispatch()
  const params=useParams();
  const User=JSON.parse(localStorage.getItem("profile")) || "";
  const token=User.token;

 useEffect(()=>{
     const id=params.id
    const payload={
     data: {Authorization:`Bearer ${token}`},
     id:id
    }
    dispatch(updateTodos(payload)).then((res)=>{
      console.log(res.payload)
    })

 },[])

  return (
    <div>
    Edit todo
    </div>
  )
}

export default EditTodo