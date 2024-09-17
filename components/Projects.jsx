import React from 'react';
import styles from './Projects.module.css'; // We'll create this CSS module

const Projects = () => {
    const projectList = [
        {
            title: "Project 1",
            description: "A brief description of Project 1.",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "https://project1.example.com"
        },
        {
            title: "Project 2",
            description: "A brief description of Project 2.",
            technologies: ["Vue.js", "Express", "PostgreSQL"],
            link: "https://project2.example.com"
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2>// my projects</h2>
            <div className={styles.projectGrid}>
                {projectList.map((project, index) => (
                    <div key={index} className={styles.projectBox}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Technologies: {project.technologies.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
