import React from 'react';
// import Db from './DataBaseConnect';
import anim1 from '../assets/animations/bgpic1.jpg';
import student from '../assets/animations/6461.jpg';
import { useState, useEffect } from 'react';
import '../index.css';



function Home() {
  const [courseName, setCourseName] = useState(null);
  const [show, setShow] = useState(6);
  const loadMore = () => {
    setShow((prev) => prev + 3);
  }
  useEffect(() => {
    fetch("http://localhost:8000/get").then(
      (response) => response.json()
    ).then((data) => {
      console.log(data.users);
      setCourseName(data.users);
      console.log(data.users[1].img);
    })
  }, [])


  return (
    <div className="hero">
      <div className="hero-content">
        <div className="left">
          <h1>
            Go beyond the limitations of <span style={{ color: '#1a2e35' }}>e-learning</span>
            {/* #0d594f */}
          </h1>
          <h2>Empower colabrative learning  Anytime Anywhere Togather !</h2>
          <div className="btns">
            <button className="animated-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">Get Started !</span>
              <span className="circle"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={anim1} alt="" className='heroimg' />
        </div>
      </div>

      <div className="second-home">
        <h1 className='title'>Our Leading Course Catagory</h1>
        <div className="courses">
          {courseName && courseName.slice(0, show).map((courseName) => (
            <div className="card" key={courseName.id} >
              <div className="top-section" style={{ backgroundImage: `url(${courseName.img})` }}>
                <div className="border"></div>
                <div className="icons">
                  <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" className="svg">
                      <path fill="white" d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"></path>
                      <path fill="white" d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"></path>
                      <path fill="white" d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"></path>
                    </svg>
                  </div>

                </div>
              </div>
              <div className="bottom-section">
                <span className="title">{courseName.course}</span>
                <div className="row row1">
                  <div className="item">
                    <span className="big-text">{courseName.s_num}</span>
                    <span className="regular-text">Students Enrolled</span>
                  </div>
                  <div className="item">
                    <span className="big-text">100%</span>
                    <span className="regular-text">Free for use</span>
                  </div>
                  <div className="item">
                    <span className="big-text">38,631</span>
                    <span className="regular-text">Contributers</span>
                  </div>
                </div>
              </div>
            </div>
          ))
          }

        </div>
        <button onClick={loadMore}>
          <span>More</span>
          <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
            <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
          </svg>
        </button>
      </div>



      <div className="third-home">
        <h1>Why to choose EduHub</h1>
        <div className="featuresSection">
          <div className="feature">
            <div>
              <h2>Feature 1</h2>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, culpa.</h3>
            </div>
          </div>
        </div>
      </div>
      <h1>test tag</h1>

    </div>
  )
}

export default Home