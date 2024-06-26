import React from "react";
import "./About.css";
import ButtonDark from "../ButtonDark/ButtonDark";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                ABOUT ME
            </div>
            <div className="about-content">
                <div className="about-left">
                    <img src="images/pfp.jpg" alt="Profile picture not available" />
                </div>
                <div className="about-right">
                    <p>
                        I am a second year graduate student diving into the world of Data Science at the University of Maryland, College Park. I'm all about making sense of numbers and building cool tools to do just that.
                        <br /> <br />
                        When I'm not knee-deep in data, you'll often find me immersed in the bleak world of Dark Souls or in the pages of a captivating novel. I'm an avid runner, always seeking new paths to explore. Whether it's crunching numbers, slaying bosses, or navigating the trails, I thrive on exciting adventures. Feel free to explore my projects and get in touch!
                    </p>
                    <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                        <ButtonDark text="View Resume" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;

