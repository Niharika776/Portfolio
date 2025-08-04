import React from 'react';
import './skill.css';
import frontend from '../../assets/frontend.png';
import aiml from '../../assets/aiml.png'
import dsa from '../../assets/dsa.png';

const Skill=()=>{
    return(
        <section id='skills'>
            <span className='skillTitle'>Things I Build & Explore</span>
            <span className='skillDesc'>I'm a tech enthusiast who learns by building. I explore web development and machine learning through real-world projects that strengthen my skills and fuel my curiosity.</span>

            <div className='skillBars'> 
                <div className='skillBar'>
                    <img src={frontend} alt='frontend' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Frontend Development</h2>
                        <p>I create responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={aiml} alt='aiml' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>AI-ML</h2>
                        <p>I'm exploring AI/ML through simple projects to learn how data solves real-world problems. </p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={dsa} alt='dsa' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>DSA</h2>
                        <p>I enjoy solving DSA problems to build strong logic and coding skills. </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skill;