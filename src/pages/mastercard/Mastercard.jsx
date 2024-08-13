import React from 'react'
import "./Mastercard.css"

const Mastercard = () => {
  return (
    <div className='Mastercard'>
        <div className="mastercard">
            <div className="mastercard-text">
            <h1>ZEN shopping Mastercard</h1>
            <p>You shouldn’t be bound to use one card at a time, especially when it has so many benefits! With ZEN, you can manage your shopping and finances with both physical and virtual cards. It’s convenient, streamlined, and works like a charm. You can have a shopping card, a subscription card, and whatever other cards that make sense to you.</p>
           <div className="master-img">
           <img src="./src/assets/apple.png" alt="" />
            <img src="./src/assets/google.png" alt="" />
           </div>
            </div>
            <div className="mastercard-img">
                <img src="./src/assets/plastik.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Mastercard