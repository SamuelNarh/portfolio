import React from "react";
import robot from "./robot.jpg"
import disable from './disabled.jpg'
import facedetect from './facedetect.JPG'
import phone from './phone.png'
import './Projects.css'


const Projects =() =>{
    return(
        <div  className="project">
            <div className="project_items">
                <div className=" ba b--black-10 mv5 mw6 ">
                    <a href={`https://github.com/SamuelNarh/Face-Recognition-Brain`} target="blank" >
                        <img src={facedetect} alt="roboapp"/> </a>.
                    <h2 className="f3 f2-ns fw6 lh-title mv0 tc">Face Recognition Brain</h2>
                </div>
            </div>
            <div className="project_items" >
                <div className=" ba b--black-10 mv5 mw6 ">
                    <a href={`https://samuelnarh.github.io/robofriends/`} target="blank" >
                        <img src={robot} alt="roboapp"/> </a>.
                    <h2 className="f3 f2-ns fw6 lh-title mv0 tc">Robofriends</h2>
                </div>                
            </div>
            <div className="project_items">
                <div className=" ba b--black-10 mv5 mw6 ">
                    <a href={`https://github.com/SamuelNarh/Django_Disability-Management-`} target="blank" >
                        <img src={disable} alt="roboapp" /> </a>.
                    <h2 className="f3 f2-ns fw6 lh-title mv0 tc">Disability Management</h2>
                </div>
            </div>
            <div className="project_items">
                <div className=" ba b--black-10 mv5 mw6 ">
                    <a href={`https://github.com/SamuelNarh/PhoneBook`} target="blank" >
                        <img src={phone} alt="roboapp"/> </a>.
                    <h2 className="f3 f2-ns fw6 lh-title mv0 tc">Phone Book</h2>
                </div>
            </div>
        </div>
        
    
    )
}

export default Projects;