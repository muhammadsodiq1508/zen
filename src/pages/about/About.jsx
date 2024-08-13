import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='About'>
        <div className="about">
            <div className="about-img">
                <img src="./src/assets/Rectangle (4).png" alt="" />
            </div>
            <div className="about-text">
                <h1>1-year warranty boost</h1>
                <p className='p1'>ZEN cards have a very neat feature that will help you <br />
                 whenever your electronic devices start failing after the <br />
                  standard warranty ends, which is pretty common.</p>
                  <p className="p2">When you buy any electronics with your ZEN shopping <br />
                   Mastercard®, their warranty gets extended by one <br />
                    year. How does it work? It simply does. Automatically.</p>
            </div>
        </div>
    </div>
  )
}

export default About