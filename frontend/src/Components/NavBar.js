import React from "react";
import {Link} from "react-router-dom";

//import "./NavBar.css"
import {NavBarContainer} from './NavBar.styled';
import { FaAdjust } from "react-icons/fa";


export default function NavBar({ toggleTheme }) {
    return (
        <NavBarContainer>
            <Link to="/"><li>Home</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
            <Link to="/email"><li>Email</li></Link>
            <li onClick={toggleTheme}><FaAdjust/></li>
        </NavBarContainer>
    );
} 