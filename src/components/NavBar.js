import React from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'

const NavBar=(props)=> {
//   static propTypes = {
//     prop: PropTypes
//   }

    const { mode, toggleMode } = props;
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg bg-${mode} `}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${mode==="dark" ?"white":"dark"}`} to="/">WorldNews</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                    <li className="nav-item">
                    <Link className={`nav-link text-${mode==="dark" ?"white":"dark"}`} aria-current="page" to="/">Home</Link>
                    </li>
                    
                    <li className="nav-item"><Link className={`nav-link text-${mode==="dark" ?"white":"dark"}`} to="/business">Business</Link></li>
                    <li className="nav-item"><Link className={`nav-link text-${mode==="dark" ?"white":"dark"}`} to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className={`nav-link text-${mode==="dark" ?"white":"dark"}`} to="/general">General</Link></li>
                    <li className="nav-item"><Link className={`nav-link text-${mode==="dark" ?"white":"dark"}`} to="/health">Health</Link></li>
                    <li className="nav-item"><Link className={`nav-link text-${mode==="dark" ?"white":"dark"}`} to="/science">Science</Link></li>
                    <li className="nav-item"><Link className={`nav-link text-${mode==="dark" ?"white":"dark"}`} to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className={`nav-link text-${mode==="dark" ?"white":"dark"}`} to="/technology">Technology</Link></li>
                    <li>
                    <div className={`my-2 mx-2 form-check form-switch text-${mode==="dark" ?"white":"dark"}`}>
                    <input className="  nav-item form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    </li>
                </ul>
                </div>
                
            </div>
        </nav>
      </div>
    )
  
}
export default NavBar
