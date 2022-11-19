import React from "react";
import { Button, LeftWrapper, Nav, RightWrapper } from "../styles/navbar.style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";
import { NavLink } from "../styles/navbar.style";

const Navbar = () => {
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token || "" 
  const first_name=User.name
  const last_name=User.title
  
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => {
    return { isAuth: state.AuthReducer.isAuth };
  });
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    const profile = "";
    localStorage.setItem("profile", JSON.stringify(profile));
    navigate("/login");
  };
  return (
    <Nav>
      <LeftWrapper>
        <NavLink to="/">Home</NavLink>
      </LeftWrapper>

      <RightWrapper>
      <NavLink to="todos/all">All Todos</NavLink>
      <NavLink to="/profile">Profile</NavLink>
       {isAuth || token ? <h5>Welcome {first_name} {last_name} </h5> : ""}
        {isAuth || token ? (
          <Button onClick={handleLogOut}>Log Out</Button>
        ) : (
          <Button>
            <NavLink to="/login">Log In</NavLink>
          </Button>
        )}
        
      </RightWrapper>
    </Nav>
  );
};

export default Navbar;
