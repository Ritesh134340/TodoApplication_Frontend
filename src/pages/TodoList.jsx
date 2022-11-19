import React,{useEffect, useState} from 'react'
import { TodoListWrapper } from '../styles/todolist.style';
import {FaEdit} from "react-icons/fa"
import {useParams} from "react-router-dom"
import { NavLink } from '../styles/signup.style';
import { getTodos } from '../Redux/AppReducer/action';
import { useDispatch } from 'react-redux';

const TodoList = ({data,handleDelete}) => {
  const dispatch=useDispatch()
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token
   

  return (
       <TodoListWrapper>
      
       <table>
        <thead>
        <tr>
         <th>Title</th>
         <th>Time</th>
         <th>Date</th>
         <th>Status</th>
       
       </tr>
        </thead>

         <tbody>
         
            {data && data.map((ele)=>
         
             <tr key={ele._id} >
             <td>{ele.title}</td>
             <td>{ele.updatedAt.split("T")[1].split(".")[0]}</td>
             <td>{ele.updatedAt.split("T")[0]}</td>
             <td>{ele.status ? "Done" : "Not Done"}</td>
             <td>
             <button><NavLink to={`/todo/edit/${ele._id}`}>Update</NavLink></button>
             <button onClick={()=>handleDelete(ele._id)}>Delete</button>

             </td>
            
             </tr>
             
          
            
            )}
           
        
         </tbody>
     
         
      </table>
      </TodoListWrapper>
    
  )
}

export default TodoList
