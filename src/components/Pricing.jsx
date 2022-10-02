import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


const Pricing = () => {
    return (
        <div>
            <Navbar />
            <section className="price">
                <h1 className="heading-section">
                    Pricing and Membership
                </h1>
                <p className="price-paragraph">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel iste doloremque, totam debitis placeat tempore, ullam minima commodi inventore accusamus a laborum labore? Ullam consequatur expedita, molestiae quaerat, eum dolorem quam totam sint ad id necessitatibus repellat reprehenderit accusamus quia corporis! Fugit pariatur sit cum nemo ex, quam, incidunt est illum molestiae vel accusantium.
                </p>
                <section className="price-box">
                    <article className="individual__price">
                        <h1 className="price-heading">$50 <small>per month</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Basic package. </span><br/><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati minus cum velit.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">
                                <li className="individual__item">Cardio and Yoga</li>
                                <li className="individual__item">Core strength enhancing exercises</li>
                                <li className="individual__item">Crossfit exercises</li>
                                <li className="individual__item">Nutritional guidance</li>
                                <li className="individual__item">Personal Trainer</li>
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="price-heading">$100 <small>per month</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Premium package.</span><br/> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur quisquam temporibus, ducimus totam inventore, odio laudantium, corporis natus deleniti voluptate provident. Fugit!.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">
                                <li className="individual__item">Cardio</li>
                                <li className="individual__item">Yoga</li>
                                <li className="individual__item">Personal Trainer</li>
                                <li className="individual__item">Spa & theraputic massage</li>
                                <li className="individual__item">Nutritional guidance</li>
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="price-heading">$200 <small>per month</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Family package.</span> <br/> <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti cupiditate corrupti, maiores magnam quis nobis harum sint at nihil, quibusdam veniam.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">

                                <li className="individual__item">Cardio</li>
                                <li className="individual__item">Yoga</li>
                                <li className="individual__item">Personal Trainer</li>
                                <li className="individual__item">spa & Massage</li>
                                <li className="individual__item">Nutritional guidance</li>
                            </ul>
                        </div>
                    </article>

                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Pricing
