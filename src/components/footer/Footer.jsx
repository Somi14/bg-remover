import React from 'react'
import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer">
    <div className="top">
      <div className="item">
        <h1>How to use</h1>
        <span>For Individuals
</span>
        <span>For Photographers</span>
        <span>For Advertising</span>
        <span>For Developers</span>
        <span>For News & Media</span>
      </div>
      <div className="item">
        <h1>Tools & API</h1>
        <span>background removal API</span>
        <span>Design Maker</span>
        <span>Photoshop Plugin</span>
        <span>Windows/Mac/Linux</span>
        <span>Integrations, tools & app</span>
      </div>
      <div className="item">
        <h1>Support</h1>
        <span>Contact Us</span>
        <span>Help & FAQ</span>
        <span>Refund Policy</span>
      </div>
      <div className="item">
        <h1>BGChanger</h1>
        <span>
        BGChanger is a tool that uses advanced computer vision algorithms to remove bg from any image online and replace background automatically with the best detailing in just a few seconds.
        All trademarks, service marks, trade names, product names, logos and trade dress appearing on our website are the property of their respective owners.
        </span>
      </div>
    </div>
    <div className="bottom">
      <div className="left">
        <span className="logo">BGChanger</span>
        <span className="copyright">
          © Copyright 2023. All Rights Reserved
        </span>
      </div>

      <div className="right">
        <img src="/img/Tiny-Payment-Method-Icons.webp" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Footer
