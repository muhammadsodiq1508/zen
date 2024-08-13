import React from 'react'
import "./Home.css"
import { FaRegCirclePlay } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='Home'>
        <div className="home">
           <div className="home-text">
           <h3><FaRegCirclePlay className='home-icon'/> In every beginning, there is chaos.</h3>
            <h1>Peaceful shopping. <br /> Mindful money. <h1/>
            <p>See how we can help with making your shopping <br /> experience and money management more ZEN.</p>
            <img src="./src/assets/app.png" alt="" /> 
            <br />
            <img src="./src/assets/play.png" alt="" />
            </h1>
           </div>
           <div className="home-img">
            <img src="./src/assets/ho.png" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Home