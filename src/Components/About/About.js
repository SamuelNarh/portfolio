import React from "react";
import './About.css'

const About =()=>{
    return (
        <div className="tc about" >
            <h1 style={{fontSize:'42px'}}>A Little AutoBiography  </h1>
            <div style={{maxWidth:'800px',fontSize:'20px' }}  className='center tj'>
               <div> My name is Samuel Narh, I am a graduate of University of Energy and Natural Resources (UENR). 
                My background is in Computer Engineering. I am an avid learner and a critical thinker.
               Given the opportunity as a worker, I will harness my skills to contribute to the organization’s goals.
                I am a Team player and will be happy to work alongside the great team of experts.I love to build and explore more challenges.
                My desire has always to develope new and innovative things to help both the tech firm and the world in general
                . I am confident that an opportunity by you or at your respected firm will help me
                grow valuable skills in the field whiles also contributing. I am available to serve and also ready for an interview anytime within 
                the week I look forward to hearing from you soon. 
                <span  className='center pt4'>Thank You !!!</span >

                <span className='center pt4 lang'>#React.js #Express #NodeJs #Javascript #Django #Python #Css #HTML</span>
                </div>
                
            </div>
        </div>
    )
}

export default About;