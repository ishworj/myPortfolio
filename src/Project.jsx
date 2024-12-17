import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {

    const projects=[
        {
            imgSrc:"/portfolio.png",
            gitSrc:"https://github.com/ishworj/myPortfolio",
            deployLink:"https://my-portfolio-phi-rust-65.vercel.app/",
            name:"Personal portfolio",
            techStack:"HTml ,css ,javasctipt ,React"
        },
        {
            imgSrc:"/chicken-geprge.png",
            gitSrc:"",
            deployLink:"",
            name:"Local-shop website",
            techStack:"HTml ,css ,javasctipt ,React"
        },
        {
            imgSrc:"/pizza.png",
            gitSrc:"https://github.com/ishworj/PizzaRecipeVeiwer",
            deployLink:"https://pizza-recipe-veiwer.vercel.app/",
            name:"Pizza Reveiwer",
            techStack:"HTml ,css ,javasctipt ,React"
        },
        {
            imgSrc:"/calculator.png",
            gitSrc:"https://github.com/ishworj/SmallLearnings/tree/main/Prank-calc/Prank-calculator",
            deployLink:"https://small-learnings-1ppr.vercel.app/",
            name:"Calculator",
            techStack:"HTml ,css ,javasctipt ,React"
        },
        {
            imgSrc:"/converter.png",
            gitSrc:"https://github.com/ishworj/Converters",
            deployLink:"https://convertertool.vercel.app/",
            name:"Converter tool",
            techStack:"HTml ,css ,javasctipt ,React"
        },

    ]
  
  return (
    <>
     <section className="projects container" id="projects">
            <h2 className="title">
                <span>My Projects</span>
            </h2>

            <div className="grid project-container">


                {projects.map((item,i)=>
                    <ProjectCard project={item} key={i}
                    />)}

                

            </div>
        </section>
    </>
  )
}

export default Project