import React from 'react'
import img1 from '../images/githubget.png'

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="project-box">
                <div className="project-item"><img src={img1} alt="github get"/></div>
                <div className="project-item"><img src={img1} alt="github get"/></div>
                <div className="project-item"><img src={img1} alt="github get"/></div>
                <div className="project-item"><img src={img1} alt="github get"/></div>
                <div className="project-item"><img src={img1} alt="github get"/></div>
            </div>
        </section>
    )
}

export default Projects
