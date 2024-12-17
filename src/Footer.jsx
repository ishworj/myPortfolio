import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
     <footer className="flex-center">
        <div className="top flex">
            <div className="links">
                <h3>
                    Links
                </h3>
                <ul>
                <li><Link to="/hero">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact"></Link></li>
                </ul>
            </div>
            <div className="socials">
                <h3>Social links
                </h3>
                <ul>
                    <li><a href="https://www.linkedin.com/in/ishwor-karki-4b3973272/" target="_blank">Linkedin</a>
                    </li>
                    <li><a href="https://github.com/ishworj" target="_blank"> Github</a>
                    </li>
                    <li><a href="https://m.facebook.com/ishwor.karki.71697/" target="_blank">Facebook</a>
                    </li>
                    <li><a href="tel:+61426374077">Phone</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bottom flex">
        &copy; Copy right all reserved 2024 || made by 😎
        </div>
        
        </footer>
    </>
  )
}

export default Footer