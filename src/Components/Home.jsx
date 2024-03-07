import React from 'react';
import anim1 from '../assets/animations/bgpic1.jpg';
import anim4 from '../assets/animations/anim4.mp4';
function Home() {
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
            <div className="ag-courses_box">
              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    UI/Web&amp;Graph design for teenagers 11-17&#160;years old
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                      04.11.2022
                    </span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    UX/UI Web-Design&#160;+ Mobile Design
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                      04.11.2022
                    </span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Annual package "Product+UX/UI+Graph designer&#160;2022"
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                      04.11.2022
                    </span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Graphic Design
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                      04.11.2022
                    </span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Motion Design
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                      30.11.2022
                    </span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Front-end development&#160;+ jQuery&#160;+ CMS
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg">
                  </div>
                  <div className="ag-courses-item_title">
                    Digital Marketing
                  </div>
                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                      31.10.2022
                    </span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Interior Design
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">
                      31.10.2022
                    </span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home