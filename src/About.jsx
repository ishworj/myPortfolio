import React from 'react'

const About = () => {
  return (
    <>
    
        <section className="about" id="about">
            <h2 className="title">
                <span>About me</span>
            </h2>

            <div className="container flex about-content">
                <div className="flex-center myImg">
                    <img src="/MyProfile.png" alt="ishowr's image" width="100%"/>
                </div>

                <div className="my-bio container">
                    <h2>Ishwor karki</h2>
                <p>I’m a curious developer passionate about solving real-world problems through programming. With a year of experience under my belt, I specialize in building RESTful APIs using the MERN stack. I’m also keen on Java and Data Structures and Algorithms (DSA). My aim is to become a full-stack developer and transition into a software engineering role. </p> 

                    <p>Currently seeking opportunities to join a team or pursue an internship to gain practical knowledge and enhance productivity. Let’s connect and explore how I can contribute to your projects with my enthusiasm and dedication.</p>
                    <div>
                        <div className="tag">
                            Interest
                        </div>

                            <div className="flex">
                                <span>Football</span>
                                <span>Coding</span>
                                <span>learning</span>
                            </div>
                        
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default About