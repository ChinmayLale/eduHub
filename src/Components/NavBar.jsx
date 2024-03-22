import React from 'react';
import edulogo1 from '../assets/edulogo_1.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function NavBar(props) {

    const svgVarience = {
        hidden: { rotate: -180 },
        visible: {
            rotate: 0,
            transition: { duration: 1 }
        }
    }

    const pathVarient = {
        hidden : {
            opacity :0 ,
            pathLength : 0
        } , 
        visible : {
            opacity : 1,
            pathLength : 1,
            transition : {
                duration : 2,
                ease : "easeInOut"
            }
        }
    }

    return (
        <div className="navbar">
            <div className="logo">
                {/* <motion.svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 14 14" style={{ fontSize: '5vw', width: '2vw'}} initial="hidden" variants={svgVarience} animate="visible">
                    <motion.path 
                    fill="currentColor" fill-rule="evenodd" variants={pathVarient2} 
                    d="m3.096.577l5.91-.003v2.303l-5.91.003a1.25 1.25 0 0 1-.742-.243l-.958-.707a.25.25 0 0 1 0-.402L2.355.82a1.25 1.25 0 0 1 .74-.244Zm8.343 2.298l-1.183.001V.573h1.187c.634.01 1.119.573 1.119 1.15c0 .578-.485 1.142-1.119 1.152zm-5.931 2.31c.335.134.62.281.867.427V14a5.47 5.47 0 0 0-1.24-.7c-.735-.294-1.795-.537-3.412-.537a.5.5 0 0 1-.5-.5V5.075a.5.5 0 0 1 .5-.5c1.72 0 2.91.259 3.785.61M8.864 13.3c-.54.217-.919.466-1.24.699V5.612c.247-.146.533-.293.868-.427c.875-.351 2.065-.61 3.785-.61a.5.5 0 0 1 .5.5v7.188a.5.5 0 0 1-.5.5c-1.617 0-2.677.243-3.413.538Z" 
                    clip-rule="evenodd" 
                    />
                </motion.svg> */}
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="80" variants={svgVarience}height="80" viewBox="0 0 2048 2048" style={{ fontSize: '5vw', width: '3vw'}}>
                    <motion.path fill="currentColor" variants={pathVarient} initial="hidden"
      animate="visible"
                    d="M1582 1065q41 72 61 150t21 161v103l-640 321l-640-321q0-60 1-112t9-101t24-98t48-103L256 960v587q29 10 52 28t41 42t26 52t9 59v320H0v-320q0-30 9-58t26-53t40-42t53-28V896L0 832l1024-512l1024 512zM256 1728q0-26-19-45t-45-19q-26 0-45 19t-19 45v192h128zm30-896l738 369l738-369l-738-369zm1250 568q0-77-15-143t-53-135l-444 222l-444-222q-33 58-50 122t-18 132v24l512 256z"/>
                </motion.svg>
                <h2>Edu<span style={{ color: props.mod === 'light' ? '#1a2e35' : 'crimson' }}>Hub</span></h2>
            </div>
            <div className="menu">
                <h3><Link to="/home">Home</Link></h3>
                <h3><Link to="/home">About</Link></h3>
                <h3><Link to="/home">Courses</Link></h3>
                <h3><Link to="/home">Reviews</Link></h3>
                <h3><Link to="/home">Instructors</Link></h3>
                {/* <Link>hello</Link> */}
            </div>
            <div className="login">
                <button className='login-btn'>Login / Signup</button>
                <label htmlFor="theme" className="theme" >
                    <span className="theme__toggle-wrap">
                        <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" onChange={props.changemode} />
                        <span className="theme__fill"></span>
                        <span className="theme__icon">
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                        </span>
                    </span>
                </label>
            </div>
        </div>
    )
}

export default NavBar