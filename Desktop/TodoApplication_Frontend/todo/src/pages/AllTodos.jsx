import React,{useState,useEffect} from 'react'
import { getTodos,deleteTodo } from '../Redux/AppReducer/action'
import {useSelector,useDispatch} from "react-redux";
import { AllTodoWrapper } from '../styles/alltodos.style';
import TodoList from './TodoList';
import { NavLink } from "../styles/alltodos.style";
const AllTodos = () => {
 const User=JSON.parse(localStorage.getItem("profile")) || "";
 const token=User.token;
 const [Todos,setTodos]=useState([])
 const dispatch=useDispatch()
 const {isLoading}=useSelector((state)=>{return { isLoading:state.AppReducer.isLoading,Todos:state.AppReducer.todoList}})



 useEffect(()=>{
  if(token){
    const payload={
      "Authorization":`Bearer ${token}`
    }
    dispatch(getTodos(payload)).then((res)=>{
      setTodos(res.payload.todos)
    })
  } 
  },[])

  const handleDelete=(id)=>{
    if(token){
     const payload={
       data: {Authorization:`Bearer ${token}`},
       id:id
     }
     dispatch(deleteTodo(payload)).then((res)=>{
       alert(res.payload.mesg)
     }).then(()=>{
      const payload={
        "Authorization":`Bearer ${token}`
      }
      dispatch(getTodos(payload)).then((res)=>{
        setTodos(res.payload.todos)
      }).catch((err)=>{
        console.log(err)
      })
     })
    }   
  }
  
  
 
  return (
   
   
   isLoading ? <h1 style={{margin:"auto",marginTop:"30px",textAlign:"center",fontFamily:"sans-serif",fontSize:"18px"}}>Loading todos...</h1> : <AllTodoWrapper>

   
    { Todos.length>0 ? <TodoList handleDelete={handleDelete}  data={Todos}/> :<h3 style={{margin:"auto",marginTop:"70px",width:"390px",fontFamily:"sans-serif",letterSpacing:"0.7px"}}>You don't have any todo...<br/>{" "}<NavLink to="/">Create Now !</NavLink></h3>}
  
     </AllTodoWrapper>
   
  )
}

export default AllTodos
