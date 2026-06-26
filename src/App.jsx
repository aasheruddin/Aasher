import { useEffect } from 'react'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {

    useEffect(() => {
        const frames = ['/frame0.png', '/frame1.png'];
        let currentFrame = 0;
        let link = document.querySelector("link[rel~='icon']");
        
        if (link) {
            const interval = setInterval(() => {
                link.href = frames[currentFrame];
                currentFrame = (currentFrame + 1) % frames.length;
            }, 200); // Swaps frame every 150ms
            
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <div className="App">
            <Navbar />
            <main>
                <Home />
                <About />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;