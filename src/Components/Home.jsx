import React from 'react';
// import Db from './DataBaseConnect';
import anim1 from '../assets/animations/bgpic1.jpg';
import student from '../assets/animations/6461.jpg';
import { useState, useEffect } from 'react';
import '../index.css';



function Home() {
  const [courseName, setCourseName] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/get").then(
      (response) => response.json()
    ).then((data) => {
      console.log(data.users);
      setCourseName(data.users);
    })
  })


  return (
    <div className="hero">
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




      <div className="second-home">
        <h1 className='title'>Our Leading Course Catagory</h1>
        <div className="courses">
          <div className="ag-format-container">
            <div className="ag-courses_box" id='courseBox'>
              {courseName && courseName.map((course) => (
                <div className="ag-courses_item" key={course.id}> {/* Add a unique key */}
                  <a href="" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">
                      {course.course}
                    </div>
                    <div className="ag-courses-item_date-box">
                      Start:
                      <span className="ag-courses-item_date">
                        04.11.2022
                      </span>
                    </div>
                  </a>
                </div>
              ))}
              <div className="ag-courses_item">
                <a href="" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">
                    Front-end development&#160;+ jQuery&#160;+ CMS
                  </div>
                  <div className="ag-courses-item_date-box">
                      Start:
                      <span className="ag-courses-item_date">
                        04.11.2022
                      </span>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="third-home">
        <h1>Why To Choose Eduhub ?</h1>
        <h3>India's Fastest Growing Educational Platform !</h3>
        <div className="features">
          <div className="keyfeatures">
            <h1>Key Features</h1>
            <h2><span style={{ color: '#00927d' }}>&#8226;</span> One to One Teaching</h2>
            <h2><span style={{ color: '#00927d' }}>&#8226;</span> Seprate Doubt Solving</h2>
            <h2><span style={{ color: '#00927d' }}>&#8226;</span> Get Connected With Friends in area</h2>
            <h2><span style={{ color: '#00927d' }}>&#8226;</span> Self Based Learning</h2>
          </div>
          <img src={student} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home