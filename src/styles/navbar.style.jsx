import styled from 'styled-components'
import {Link} from "react-router-dom";

export const Nav=styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family:"Roboto",sans-serif;
    justify-content: space-between;
    font-family:sans-serif;
    height:80px;
    display:flex;
    align-items: center;
    color:white;
    background-color: #1f1d1d;
`

export const NavLink=styled(Link)`
    text-decoration:none;
    color:white
   
`
export const Button=styled.button`
    background-color :black;
    border:1px solid white;
    border-radius: 3px;
    padding:4px 10px;
    font-weight:700;
    color:white
`

export const LeftWrapper=styled.div`
  margin-left:50px;

`

export const RightWrapper=styled.div`
  display:flex;
  letter-spacing:0.8px;
  font-weight:500;
  margin-right:30px;
  align-items : center;
  justify-content :space-evenly ;
  width:500px;
`