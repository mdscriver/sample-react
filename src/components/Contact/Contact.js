import React from "react";

function Contact() {
    return (



        <div className="container-fluid mt-3">

            {/* <div className="container mt-3"> */}
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <h1 className="textColor">Contact Information</h1>
                </div>
            </div>
            {/* </div> */}


            <div className="row mt-3">
                <div className="col-6">
                    <li className="d-flex justify-content-center">
                        <a
                            type="button"
                            className="btn"
                            className="textColor"
                            href="https://github.com/grantscriver"
                        >GitHub</a>
                    </li>
                    <li className="d-flex justify-content-center">
                        <a
                            type="button"
                            className="btn"
                            className="textColor"
                            href="https://www.linkedin.com/in/grant-scriver/"
                        >LinkedIn</a>
                    </li>
                    <li className="d-flex justify-content-center">
                        <a
                            type="button"
                            className="btn"
                            className="textColor"
                            href={process.env.PUBLIC_URL + "/assets/Grant_Scriver_Coding_Resume_2021JAN03.pdf"}
                        >Resume</a>
                    </li>
                </div>
                <div className="col-3">
                    <ul>
                        <li>
                            <p className="textColor">Email: grantscriver@gmail.com</p>
                        </li>
                        <li>
                            <p className="textColor">Phone: 612-875-0809</p>
                        </li>
                    </ul>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Contact;