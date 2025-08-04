import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio1.png';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.png';
import portfolio4 from '../../assets/portfolio4.png';  
import portfolio5 from '../../assets/portfolio5.jpg';
import portfolio6 from '../../assets/portfolio6.png';      

const projects = [
    {
        title: "Comment Analyzer",
        image: portfolio1,
        link: "https://github.com/your-username/comment-analyzer"
    },
    {
        title: "Recipe Website",
        image: portfolio2,
        link: "https://github.com/your-username/attendance-tracker"
    },
    {
        title: "Attendance Tracker",
        image: portfolio3,
        link: "https://github.com/your-username/twitter-clone"
    },
    {
        title: "Twitter UI Clone",
        image: portfolio4,
        link: "https://github.com/your-username/fake-news-detector"
    },
    {
        title: "Interior Design Showcase",
        image: portfolio5,
        link: "https://github.com/your-username/interior-design-showcase"
    },
    {
        title: "E-Commerce Landing Page",
        image: portfolio6,
        link: "https://github.com/your-username/ecommerce-landing"
    },
];

const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>My Portfolio</h2>
            <span className='worksDesc'>
                I take pride in building clean, functional, and user-centric projects that blend design with real-world utility.
                With a passion for problem-solving and a solid foundation in development, I focus on creating solutions that are both technically sound and visually engaging.
            </span>
            <div className='worksImgs'>
                {projects.map((project, index) => (
                    <div className='projectCard' key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} className='worksImg' />
                        </a>
                        <p className='projectTitle'>{project.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Works;
