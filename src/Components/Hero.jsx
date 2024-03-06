import React from 'react';
import anim1 from '../assets/animations/anim1.mp4';
import anim4 from '../assets/animations/anim4.mp4';
function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h1>
          Go beyond the limitations of <span style={{ color: '#ab0a10' }}>e-learning</span>
          {/* #c92516 */}
        </h1>
        <h2>Empower colabrative learning  Anytime Anywhere Togather !</h2>
        <div className="btns">
          <button class="animated-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span class="text">Get Started !</span>
            <span class="circle"></span>
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>

          <h3>Hii</h3>
        </div>

      </div>
      <div className="right">
        <video src={anim4} alt="" loop muted className='heroimg' />
      </div>


    </div>
  )
}

export default Hero