import React, { useEffect ,useState} from 'react'
import { getTodos,createTodos } from '../Redux/AppReducer/action'
import { useDispatch,useSelector } from 'react-redux'
import { HomeWrapper, MainHomeDiv } from '../styles/home.styled'
import {MdAddCircle} from "react-icons/md"
const Home = () => {
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token
  const [todoTitle,setTodoTitle]=useState("")
  const dispatch=useDispatch()

  const {isLoading}=useSelector((state)=>{return {isLoading:state.AppReducer.isLoading}})
  
  const handleAddTodo=()=>{
    
    const payload={
       data: {Authorization:`Bearer ${token}`},
       title:todoTitle
    }
    dispatch(createTodos(payload)).then((res)=>{
      setTodoTitle("")
      alert(res.payload.mesg)
    })
  }
 
  return (
    <MainHomeDiv >

    {isLoading ? <img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img> : <HomeWrapper>
       
          <input type="text" placeholder="Add something..." onChange={(e)=>setTodoTitle(e.target.value)}></input>
          <button onClick={handleAddTodo}><MdAddCircle style={{ fontSize:"40px"
  
          }}/></button>
      </HomeWrapper>}
      </MainHomeDiv>
  )
}

export default Home
