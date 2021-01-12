import React from "react";
import portrait from "./PortraitComp.jpg"
import "./About.css"

function About() {
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h1 className="textColor">Web Development Portfolio</h1>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img
                            src={portrait}
                            className="img-fluid"
                            id="portraitPhoto"
                            alt="Picture of me"
                        />
                    </div>
                </div>
            </div>

            <div className="container mt-3 mb-5">
                <div className="row">
                    <p className="textColor">
                        Full stack web developer with a passion for arts and creativity. Recently earned a certificate through the University of Minnesota, gaining real-world developer experience in HTML, CSS, Javascript and responsive frontend & backend web design. Applied these skills to develop a diverse portfolio of user-friendly applications. Led front-end development for multiple group projects, collaborating with team members to successfully create diverse applications by leveraging the most current technologies available. As a new dedicated team member, I am excited to apply my creative approach to problem solving in a professional setting.
        </p>
                </div>
            </div>
        </div>
    );
}

export default About;