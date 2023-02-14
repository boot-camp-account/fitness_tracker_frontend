import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavUnlisted = styled.ul`

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
    border-right: 1px solid #bbb;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li:hover {
    background-color: #04AA6D;
  }
`

const Navbar = ({token, logout}) => {

    return (
        <header>
            <NavUnlisted>
                <NavLink to="/home">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/posts">
                    <li>Routines</li>
                </NavLink>
                <NavLink to="/activities">
                    <li>Activities</li>
                </NavLink>
                <NavLink to="/profile">
                    <li>My Routines</li>
                </NavLink>
                {
                    token ? (
                        <NavLink to="/home" onClick={() => {
                            logout();}}>
                            <li>Logout</li>                      
                        </NavLink>
                    ) : (
                        <NavLink to="login">
                            <li>Log In</li>
                        </NavLink>
                    )
                }
            </NavUnlisted>
        </header>
    

    )
}

export default Navbar;