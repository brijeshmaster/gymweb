import React from 'react'

import {GiMuscleUp,GiKnifeFork, GiHeartBeats, GiRobe} from 'react-icons/gi';

const AboutHome = () => {
    return (
        <section className="about-home">
            <h1 className="about-home__heading">who are we</h1> 
            <p className="about-home__block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum commodi facilis eius sequi! Natus, enim nostrum. Sunt illum minus excepturi commodi dignissimos doloribus, nulla nisi ratione hic numquam natus maxime tempora. Voluptas quaerat tenetur eum doloribus laboriosam quisquam? Illum, fuga quibusdam ea incidunt et similique eveniet quidem facilis! Ea quia repudiandae eligendi nemo! Pariatur!
            </p>
            <h1 className="about-home__heading about-home__heading--sub">
                Our Goal
            </h1>
            <p className="about-home__block">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni blanditiis eveniet, officiis sit totam cupiditate animi nihil incidunt libero aut ea nobis hic fuga magnam ipsum rem! Ad magnam cupiditate sapiente facere quod?
            </p>
            <div className="about-home-flex">
                <div className="about-home__sub-block">
                    <GiMuscleUp  className="home-icon"/>
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Core Body exercises</h4>
                        <p className="muted-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum cupiditate sed, officia ex molestias fugiat! Officia provident, a velit consequatur quos autem officiis unde ex numquam excepturi nobis fugiat?
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiRobe className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Personal Trainers</h4>
                        <p className="muted-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quas quisquam est eaque fuga eius ex modi earum veritatis assumenda, atque iusto minus!
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiKnifeFork className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Nutrition and planning</h4>
                        <p className="muted-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, obcaecati consequuntur excepturi odit enim aliquam alias facilis at expedita, atque hic officia temporibus, minus possimus sit. Cum hic praesentium voluptates minus assumenda magnam repudiandae?
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                   <GiHeartBeats className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Yoga & Spa</h4>
                        <p className="muted-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum cupiditate sed, officia ex molestias fugiat! Officia provident, a velit consequatur quos autem officiis unde ex numquam excepturi nobis fugiat?
                        </p>
                    </div>
                </div>

            </div>
            
           
           
        </section> 
    )
}

export default AboutHome

