import React from "react";
import './Navigation.css'
import logo from './logo.png'

const Navigation = ({onRouteChange}) =>{
    return(
        <nav className="navbar">
        <div>
            <img src={logo} alt="" className="img" />
        </div>
            <ul className="navbar_items">
                <li onClick={() =>onRouteChange('home')}>Home</li>
                <li onClick={() =>onRouteChange('about')}>About</li>
                <li onClick={() =>onRouteChange('projects')}>Projects</li>
            </ul>

        </nav>
    )
}

export default Navigation;