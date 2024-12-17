import React from 'react'

const ProjectCard = ({project}) => {
    const {imgSrc,gitSrc,deployLink,name,techStack}=project;
  return (
    <div className="project-card">
                    <div className="top">
                        <img src={imgSrc} alt="my portfolio project" width="100%"/>
                    </div>
                    <div className="bottom container">
                        <div className="links">
                            <a href={gitSrc} target="_blank"><i className="fa-brands fa-github"></i></a>
                            <a href={deployLink} target="_blank"><i className="fa-brands fa-chrome"></i></a>
                        </div>

                        <h3>{name}</h3>
                        <p>TechStack: {techStack}</p>
                    </div>
                </div>
  )
}

export default ProjectCard