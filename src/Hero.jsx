import React from 'react'

const Hero = () => {
  return (
    <section className="hero-section container" id="hero">
            <div className="grid hero">
                <div className="left flex">
                    <div>
                        Hi I'm <span>Ishwor karki</span>
                    </div>
                    <div className="tag">
                        <div>Full stack developer</div>
                    </div>
                    <p>I solve real life problems with the help of coding 💻</p>
                    <div>
                        <a href="/assets/MyProfile.png" download="">
                            <button>Download CV <i className="fa-solid fa-download"></i></button>
                        </a>
                    </div>
                </div>
                <div className="right flex">
                    <img src="/MyProfile.png" alt="its me ishwor"/>
                </div>
            </div>

        </section>
  )
}

export default Hero