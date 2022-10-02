import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
    return (
        <main>
            <Navbar />
            <section className="contact">
                <h1 className="heading-section">Contact</h1>
                <div className="container">
                    <article className="contact-section">
                        <strong className="contact-heading">Location</strong>
                        <p className="contact-paragraph">
                    
                        11,mira road, mumbai-009
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Call</strong>
                        <p className="contact-paragraph">
                            +91 5252555200 <br/>
                            +91 9292992200
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Email</strong>
                        <p className="contact-paragraph">
                            contact@silvergym.com
                        </p>
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Contact