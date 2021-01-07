import React, { Component } from "react";
import Project from "../Project/Project"
import Wrapper from "../Wrapper/Wrapper"
import projects from "../../projects.json"




class Portfolio extends Component {

    state = {
        projects
    }

    render() {
        return (
            <Wrapper>
                {this.state.projects.map(project => (
                    <Project
                        id={project.id}
                        picture={project.picture}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        gitHub={project.gitHub}
                        site={project.site}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default Portfolio;