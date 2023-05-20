import React from "react";
import './Home.css'
import mypic from './mypic.JPG'

const Home = () =>{
    return(
        <div className="home">
             <div className="pt6 pa4 tc b home_item">
                <p style={{color:'green'}}>Hello Friend !!!</p>
                <p>I'm a fullstack Web Developer</p>
                <button className="center b button">Hire Me </button>
            </div>
            <div>
                <img src={mypic}  alt="my_profile_pic" id="mypic" />
            </div>
        </div>
    )
}

export default Home;