import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <> 
    <header>
        <div className="header container flex">
            <div className="logo flex">
                <div>Ishwor</div>
                <div className="line">FullStack Developer </div>
            </div>

            <label htmlFor="hamburger"><i className="fa-solid fa-bars"></i></label>
            <input type="checkbox" name="" id="hamburger" />

            <div className="menu">
                <ul className="flex navigation">
                    <li><Link to="/hero">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header