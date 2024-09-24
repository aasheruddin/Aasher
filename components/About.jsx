import React, { useEffect, useRef } from 'react';
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
            <div className={styles.aboutContent}>
                <h2>// about me</h2>
                <p>I am a 3rd year <b>Computer Information Systems</b> student at Mount Royal University. I have a passion for software development and web development.</p> 
            </div>
        </section>
    );
}

export default About;
