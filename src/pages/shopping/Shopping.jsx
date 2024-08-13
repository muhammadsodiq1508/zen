import React from 'react'
import "./Shopping.css"

const Shopping = () => {
  return (
    <div className='Shopping'>
        <div className="shopping">
           <div className="shop-img">
           <img src="./src/assets/cart-shopping.png" alt="" />
           </div>

           <div className="shop-text">
            <h1>Shopping with no fees</h1>
            <p className='p6'>Online shopping is flawed with all kind of fees. Currency exchange fees, processing fees and even fees for having multiple fees. Getting rid of them became our hobby. Same goes for ATM withdrawal fees.</p>
            <p className="p7">
            Enjoy your money globally. Every uncut part of it. Keep reading. ZEN goes beyond shopping with a fully functional account.
            </p>
           </div>
        </div>
    </div>
  )
}

export default Shopping