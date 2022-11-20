import React,{useEffect, useState} from 'react'
import { TodoListWrapper } from '../styles/todolist.style';
import {FaEdit} from "react-icons/fa"
import {useParams,Link} from "react-router-dom"
import { NavLink } from '../styles/signup.style';
import { getTodos } from '../Redux/AppReducer/action';
import { useDispatch } from 'react-redux';
import {MdPendingActions} from "react-icons/md"
import {BiTask} from "react-icons/bi"

const TodoList = ({data,handleDelete}) => {
  const dispatch=useDispatch()
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token
  const [id,setId]=useState(0)

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
             <td className="list-title">{ele.title}</td>
             <td>{ele.updatedAt.split("T")[1].split(".")[0]}</td>
             <td>{ele.updatedAt.split("T")[0]}</td>
             <td>{!ele.status ? <MdPendingActions id="task-pending"/> :<BiTask id="task-done"/>}</td>
             <td>
             <button id="list-update-button"><Link id="update-link"  to={`/todo/edit/${ele._id}`}>Update</Link></button>
             <button id="list-delete-button" onClick={()=>handleDelete(ele._id)}>Delete</button>

             </td>
            
             </tr>
             
          
            
            )}
           
        
         </tbody>
     
         
      </table>
      </TodoListWrapper>
    
  )
}

export default TodoList
