import { useEffect, useRef } from 'react';
import styles from './Projects.module.css'; // We'll create this CSS module

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const projectList = [
        {
            title: "Avenger Sorting",
            description: "Used different data structures to sort a list of Avengers",
            technologies: ["Java"],
            link: "https://github.com/aasheruddin/Avenger-Sorting"
        },
        {
            title: "Stock Predictor",
            description: "Predicts stock price based on history and trends",
            technologies: ["Python"],
            link: "https://project2.example.com"
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className={`${styles.projectsSection} fade`} ref={sectionRef}>
            <h2>{"// my projects"}</h2>
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
