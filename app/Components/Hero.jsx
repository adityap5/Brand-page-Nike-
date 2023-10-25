import React from 'react'

const Hero = () => {
  return (
   <>
   <div className="hero">
   <div className="hero-left">
    <h1>your feet desrve the best</h1>
    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
    <div className="btn">
        <button className="btn1">Shop Now</button>
        <button className="btn2">Category</button>
    </div>
    
    <div className="market">
    <h3>Also Available On</h3>
    <div className="market1">
    <img src="/images/flipkart.png" alt="flipkart" />
        <img src="/images/amazon.png" alt="amazon" />
    </div>
      

    </div>
   </div>
<div className="hero-right">
    <img src="/images/shoe_image.png" alt="hero" />
</div>
   </div>
   </>
  )
}

export default Hero
