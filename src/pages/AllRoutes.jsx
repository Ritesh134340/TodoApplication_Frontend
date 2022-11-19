import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from "./Home"
import PrivateRoute from '../private/PrivateRoute'
import Signup from './Signup'
import AllTodos from './AllTodos'
import Profile from './Profile'
import EditTodo from './EditTodo'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/todos/all" element={<PrivateRoute><AllTodos/></PrivateRoute>}/>
      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path="/todo/edit/:id" element={<PrivateRoute><EditTodo/></PrivateRoute>}/>
    </Routes>
  )
}

export default AllRoutes
