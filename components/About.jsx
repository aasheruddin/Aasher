import React from "react";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1"
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const one = (
        <p>
         I am a Computer Information Systems student at Mount Royal University
        </p>
      );
      const two = (
        <p>
          Outside of work, . I also play a lot of video games.
        </p>
      );
  
      const tech_stack = [
        "Typescript",
        "Python",
        "React.js",
        "Java"
      ];

const About = () =>{
    return(
        <div id="about">
  
                <div className="section-header">
                    <span className = "section-title">About Me</span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        {[one]}
                        {"Here are some technologies I have been working with:"}
                        <ul className="tech-stack">
                            {tech_stack.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                        {[two]}
                    </div>
                </div>
                    
            
        </div>
    )
}

    } 
}

export default About;