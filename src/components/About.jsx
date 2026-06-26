import { useEffect, useRef } from 'react';
import styles from './About.module.css';

const About = () => {
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

    return (
        <section id="about" className={`${styles.aboutSection} fade`} ref={sectionRef}>
            <h2>{"// about me"}</h2>
            
            <div className={styles.aboutSplitWrapper}>
                {/* Left Side: The Diagnostic Narrative */}
                <div className={styles.aboutContent}>
                    <p>
                        I’m a 4th-year <b>Computer Information Systems</b> student at Mount Royal University with a passion for building things from the ground up.
                    </p>
                    <p>
                        Whether it’s finding a faulty alternator under the hood of a car or reverse-engineering an application workflow, my approach to problem-solving is the same: strip the system down to its core mechanics, isolate the point of failure, and rebuild it better.
                    </p>
                    <p>
                        I apply this exact hands-on, diagnostic methodology to full-stack software development, containerized deployments, and bare-metal systems architecture.
                    </p>
                </div>

                {/* Right Side: Transparent Portrait Silhouette */}
                <div className={styles.imageContainer}>
                    <img 
                        src="/cropme2.png" 
                        alt="Aasher Uddin" 
                        className={styles.silhouetteImg} 
                    />
                </div>
            </div>
        </section>
    );
}

export default About;