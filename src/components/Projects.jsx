import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const sectionRef = useRef(null);
    const [expandedProject, setExpandedProject] = useState(null);

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

    const toggleProject = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    const projectList = [
        {
            id: "sideflicks",
            command: "php artisan serve --project=sideflicks",
            date: "2026-04",
            title: "SideFlicks",
            description: "Engineered a full-stack movie listing platform with dynamic query filtering and database management.",
            technologies: ["PHP", "MySQL", "CSS", "SQL"],
            link: "https://github.com/aasheruddin/Home-Server" 
        },
        {
            id: "home-server",
            command: "docker compose up -d --build",
            date: "2026-05",
            title: "Home Server Linux Lab",
            description: "Configured a bare-metal home server running Ubuntu and Portainer to host network-wide cloud storage and an ad blocker.",
            technologies: ["Ubuntu", "Docker", "Portainer", "Linux"],
            link: "https://github.com/aasheruddin/Home-Server"
        },
        {
            id: "avenger-sorting",
            command: "java -jar AvengerSorting.jar",
            date: "2026-03",
            title: "Avenger Sorting",
            description: "Used different data structures to sort a list of Avengers.",
            technologies: ["Java"],
            link: "https://github.com/aasheruddin/Avenger-Sorting"
        },
        {
            id: "stock-predictor",
            command: "python predict_trends.py",
            date: "2026-02",
            title: "Stock Predictor",
            description: "Predicts stock price based on history and trends.",
            technologies: ["Python"],
            link: "https://project2.example.com"
        }
    ];

    return (
        <section id="projects" className={`${styles.terminalSection} fade`} ref={sectionRef}>
            <h2>{"// my projects"}</h2>
            
            <div className={styles.terminalWindow}>
                {/* Simulated Window Control Bar */}
                <div className={styles.terminalHeader}>
                    <div className={`${styles.dot} ${styles.red}`}></div>
                    <div className={`${styles.dot} ${styles.yellow}`}></div>
                    <div className={`${styles.dot} ${styles.green}`}></div>
                    <span className={styles.terminalTitle}>bash - aasher@portfolio:~</span>
                </div>

                {/* Simulated Interactive Command Shell */}
                <div className={styles.terminalBody}>
                    {projectList.map((project) => {
                        const isExpanded = expandedProject === project.id;
                        
                        return (
                            <div key={project.id} className={styles.logRow}>
                                {/* Interactive prompt command line */}
                                <div 
                                    className={`${styles.logLine} ${isExpanded ? styles.activeLine : ''}`} 
                                    onClick={() => toggleProject(project.id)}
                                >
                                    <span className={styles.prompt}>aasher:~$</span>
                                    <span className={styles.commandText}>{project.command}</span>
                                    <span className={styles.logDate}>{project.date}</span>
                                    <span className={styles.expandIcon}>{isExpanded ? '[-]' : '[+]'}</span>
                                </div>

                                {/* Slide-down output containing standard details */}
                                <div className={`${styles.logOutput} ${isExpanded ? styles.showOutput : styles.hideOutput}`}>
                                    <div className={styles.outputDetails}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <p className={styles.techList}>
                                            <strong>Technologies:</strong> {project.technologies.join(', ')}
                                        </p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.terminalBtn}>
                                            cat README.md
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    
                    {/* Living terminal prompt indicator */}
                    <div className={styles.cursorLine}>
                        <span className={styles.prompt}>aasher:~$</span> 
                        <span className={styles.blinkingCursor}>█</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;