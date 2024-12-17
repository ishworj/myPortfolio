import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="contact container" id="contact">
            <h2 className="title">
                <span>Contacts</span>
            </h2>

            <div className="flex social">
                <a href="https://www.linkedin.com/in/ishwor-karki-4b3973272/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/ishworj" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://m.facebook.com/ishwor.karki.71697/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="tel:+61426374077"><i className="fa-solid fa-phone"></i></a>
            </div>
            <h3>OR</h3>
            
            <div className="flex-center">
                <a href="mailto:karkiishwor10@gmail.com" className="email-section flex-center"> 
                    <span>karkiishwor10@gmail.com</span>
                    <div className="email-icon flex-center">
                        <i className="fa-regular fa-paper-plane" onClick=""></i></div>
                </a>
            </div>
        </section>
    </>
  )
}

export default Contact