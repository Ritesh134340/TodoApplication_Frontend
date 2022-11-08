import * as types from "./actionTypes";
import axios from "axios";


const getTodos=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_REQUEST});
   return  axios.get("https://todo-application-z9c7.onrender.com/todo/",{headers:payload}).then((res)=>{
    
     return   dispatch({type:types.GET_SUCCESSFUL,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.GET_FAILURE,payload:err})
    })
}

const createTodos=(payload)=>(dispatch)=>{
    dispatch({type:types.CREATE_REQUEST});
   return  axios.post("https://todo-application-z9c7.onrender.com/todo/create",{title:payload.title},{headers:payload.data}).then((res)=>{
       return  dispatch({type:types.CREATE_SUCCESSFUL,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.CREATE_FAILURE,payload:err})

    })
}


const updateTodos=(payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_REQUEST})
    return axios.patch(`https://todo-application-z9c7.onrender.com/todo/update/${payload.id}`,payload.updat,{headers:payload.data}).then((res)=>{
       return dispatch({type:types.UPDATE_SUCCESSFUL,payload:res.data})
    }).catch((err)=>{
      dispatch({type:types.UPDATE_FAILURE,payload:err})
    })
  }
  




const deleteTodo=(payload)=>(dispatch)=>{
    dispatch({type:types.DELETE_REQUEST});
   return  axios.delete(`https://todo-application-z9c7.onrender.com/todo/delete/${payload.id}`,{headers:payload.data}).then((res)=>{
        return dispatch({type:types.DELETE_SUCCESSFUL,payload:res.data})
       }).catch((err)=>{
        dispatch({type:types.DELETE_FAILURE,payload:err})
       })
}





export {getTodos,createTodos,deleteTodo,updateTodos}