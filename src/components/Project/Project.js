import React from "react";
import "./Project.css";

function Project(props) {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="co-12 col-md-4">
                    <div className="img-container">
                        <img src={process.env.PUBLIC_URL + props.picture}
                            id="portfolioPhoto" />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="content">
                        <h3 className="textColor">{props.name}</h3>
                        <p className="textColor">{props.description}</p>
                        <p className="textColor">Technologies Used: {props.technologies}</p>
                        <a className="textColor"
                            type="button"
                            className="btn btn-outline-light"
                            href={props.gitHub}
                        >
                            GitHub
                </a>
                        <a className="textColor"
                            type="button"
                            className="btn btn-outline-light"
                            href={props.site}
                        >
                            Live Site
                </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;