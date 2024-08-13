import React from 'react'
import "./Footer.css" 

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer">
        <div className="f1">
          <p>Learn</p>
          <ul>
            <li>
              <a href="">Help center</a>
            </li>

            <li>
              <a href="">Join ZEN team</a>
            </li>

            <li>
              <a href="">Privacy Policy</a>
            </li>

            <li>
              <a href="">Cookies</a>
            </li>

            <li>
              <a href="">Terms of use</a>
            </li>
          </ul>
        </div>
        <div className="f2">
          <p>Discover</p>

          <ul>
            <li>
              <a href="">For developers</a>
            </li>

            <li>
              <a href="">Apple Pay</a>
            </li>

            <li>
              <a href="">Google Pay</a>
            </li>
          </ul>
        </div>
        <div className="f3">
          <p>Offer</p>
          <ul>
            <li>
              <a href="">Business</a>
            </li>

            <li>
              <a href="">Personal</a>
            </li>
          </ul>
        </div>

        <div className="f4">
          <p>Language</p>

          <ul>
            <li>
              <a href="">English</a>
            </li>

            <li>
              <a href="">Polish</a>
            </li>
          </ul>
        </div>
        <div className="f5">
          <p>Follow us</p>
          <img src="./src/assets/in.png" alt="" />
        </div>
        <div className="f6">
          <p>Contact</p>
          <ul>
            <li>
              <a href="">hello@zen.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copiright">
        <p>ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries. Registration number of the company 304749651, VAT ID LT100011714916. License of electronic money institutions number LB000457. Share capital 2.185.000,00 EUR. Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.</p>
        <img src="./src/assets/pci.png" alt="" />
      </div>
    </div>
  )
}

export default Footer