import React, {useState, useContext} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {TrainerContext} from '../context/TrainerContext'
import vid from '../assets/180419_Boxing_A1_04.mp4';
import ExpertCard from './ExpertCard';

const About = () => {
    const [...trainers] = useContext(TrainerContext);
    const [gym] = useState(trainers.filter(item => item.type==='gym'));
    const [nut] = useState(trainers.filter(item => item.type==='nut'));
    return (
        <main>
            <Navbar />
            <div className="about-page">
                <video autoPlay playsInline muted loop className="about-page-hero">
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="about-content">
                    <section className="about-section">
                        <h1 className="about-heading">About Us</h1>
                        <p className="about-paragraph">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident velit error, laborum delectus soluta perspiciatis laudantium quos officia possimus! Cum accusamus minus ab quis neque perspiciatis. Atque dignissimos modi fugiat?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ea, consequuntur porro blanditiis laboriosam fuga aperiam dicta veniam quo ut vero libero, atque temporibus ullam eaque illum! Quam nemo non deleniti, doloribus doloremque natus. Tempore vitae voluptate nobis? Eius, facilis. Atque, nemo voluptatibus dignissimos voluptatem itaque soluta, architecto, perferendis quisquam maiores debitis quis dolore repellendus autem facere ad. Incidunt, quidem voluptates minima porro distinctio suscipit. Iste, nobis magnam. Sint quia illo necessitatibus quam laudantium eveniet deserunt vero natus facere consectetur rerum dolore eum, perspiciatis aliquid error aperiam. Dolorem est voluptas ullam molestias illum maxime ipsa porro velit adipisci. Beatae repellat repellendus inventore earum sapiente, illo, nostrum, nisi officia ipsam tempora perspiciatis esse. Similique mollitia perspiciatis error at doloribus corporis nemo! Facilis quibusdam nobis sint voluptatibus, amet quos a. Velit quibusdam temporibus laboriosam placeat odio rem delectus dolor praesentium enim similique, ex saepe repellat suscipit numquam. Fugiat est quod quasi, perspiciatis ipsa sapiente tenetur laboriosam id esse, nulla consequuntur ut facere veritatis cum cumque odio? Doloribus eveniet perferendis facilis numquam delectus voluptate nulla labore iusto maxime eum amet repudiandae atque maiores sapiente ab praesentium tenetur et, a nisi aperiam rem animi porro dolores. Corrupti praesentium eius laboriosam repellat perspiciatis quia autem velit cupiditate laudantium, cumque numquam aspernatur quo harum sit tenetur unde laborum sunt quibusdam. Ex, veniam corrupti culpa sunt est optio vel.
                        </p>
                        
                    </section>
                    <section className="about-section">
                        <h1 className="about-heading">Nutrition</h1>
                        <p className="about-paragraph">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit illum corporis cumque, quas nobis quod provident ullam libero et repellat non mollitia voluptatibus eligendi debitis doloribus recusandae commodi suscipit id nam adipisci numquam, ut accusantium odit nulla! Voluptatem velit nesciunt commodi doloremque labore debitis eveniet ducimus, obcaecati, magnam eligendi similique repellat aperiam provident molestiae recusandae quaerat molestias, ipsa ullam? <strong>Nutritionists </strong>
                        </p>
                        <div className="flexy">
                            {nut.map(item => 
                                <ExpertCard key={item.id}
                                    name={item.name}
                                    img={item.pic}
                                    qualification={item.qualification}
                                    experience={item.experience}
                                    gender = {item.gender}
                                    item = {item.gender}
                                    slug = {item.slug}
                            />)}
                        </div>
                    </section>
                    <section className="about-section">
                        <h1 className="about-heading">Trainers</h1>
                        <p className="about-paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias dolores nisi, aliquam modi quidem officiis veniam quisquam accusamus quam ullam possimus quo et repellat. Tempora vero saepe expedita amet voluptates inventore! Aut quam vero nemo accusantium impedit assumenda in odio adipisci soluta laudantium eaque magnam cum accusamus facilis nesciunt earum saepe eveniet, eius aliquid provident incidunt omnis! Facilis quas libero iste a dolores unde totam veniam. <strong>Fitness Trainers </strong>
                        </p>
                        <div className="flexy">
                            {gym.map(item => 
                                <ExpertCard key={item.id}
                                    name={item.name}
                                    img={item.pic}
                                    qualification={item.qualification}
                                    experience={item.experience}
                                    gender = {item.gender}
                                    item = {item.gender}
                                    slug = {item.slug}
                            />)}
                        </div>
                    </section>
                </div>
            </div>
           <Footer />
        </main>
    )
}

export default About
