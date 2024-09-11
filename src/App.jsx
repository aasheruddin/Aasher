import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';


function App() {
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
