import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Home = () => {
    const nameRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        // Typewriter effect
        gsap.to(nameRef.current, {
            duration: 2,
            text: "hi, it's aasher",
            ease: "none",
            delay: 0.5
        });

        // Blinking cursor effect
        gsap.to(cursorRef.current, {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            duration: 0.7
        });
    }, []);

    return (
        <div id="home">
            <span className='home-title'>
                
                <span className='intro-name' ref={nameRef}></span>
                <span className='cursor' ref={cursorRef}>|</span>
            </span>
        </div>
    );
}

export default Home;