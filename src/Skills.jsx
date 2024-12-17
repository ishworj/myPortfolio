import React from 'react'

const Skills = () => {
  return (
    <>
    <section className="banner flex container">
        <div className="flex info-content">
            <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
            </div>
            <div>
                <span>Graduate </span>
                <p>july 2025</p>
            </div>
        </div>

        <div className="info-divider">
        </div>

        <div className="flex info-content">
            <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
            </div>
            <div>
                <span>4+ Projects</span>
                <p>Completed</p>
            </div>
        </div>

        <div className="info-divider">
        </div>

        <div className="flex info-content">
            <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
            </div>
            <div>
                <span>Trainee</span>
                <p>Experience</p>
            </div>
        </div>



    </section>
    
    <div className="skills"  id="skills">
        <h2 className="title">
            <span>Skills</span>
        </h2>
        <div className="container flex skills-container">
            <div>
                <i className="fa-brands fa-html5" style={{color: "orange"}}></i>
                <span>HTML</span>
            </div>
            <div>
                <i className="fa-brands fa-css3-alt" style={{color: "blue"}}></i>
                <span>CSS</span>
            </div>
            <div>
                <i className="fa-brands fa-js" style={{color:" rgb(217, 175, 97)"}} ></i>
                <span>JS</span>
            </div>
            <div>
                <i className="fa-brands fa-github" style={{color:"rgb(0, 0, 0)"}}></i>
                <span>Git</span>
            </div>
            <div>
                <i className="fa-brands fa-java" style={{color:"rgb(144, 69, 69)"}}></i>
                <span>Java</span>
            </div>
        </div>

    </div></>
  )
}

export default Skills