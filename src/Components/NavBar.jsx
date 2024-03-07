import React from 'react';
import edulogo1 from '../assets/edulogo_1.svg';
import { Link } from 'react-router-dom';
function NavBar(props) {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={edulogo1} alt="" style={{ width: '50px', height: '50px' }} />
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