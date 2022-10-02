import React, { useContext } from 'react'
import {TrainerContext} from '../context/TrainerContext'

const Trainers = () => {
    const [...trainers] = useContext(TrainerContext);
    
 
    
    return (
        <div>
            {trainers.map(trainer => (
                <div key={trainer.id}>
                    <img src={trainer.pic} alt={trainer.name}/>
                    {<strong>{trainer.name}</strong>} is a Certified Strength and Condition Specialist (CSCS) with the National Strength and Conditioning Association. {trainer.gender === 'male' ? 'He':'She'} has an extensive background from training professional and amateur athletes to working professionals with nominal experience in fitness.
                    <button>Read More</button>
                    <br/><br/><hr/>
                </div>
            ))}
        </div>
    )
}


export default Trainers
