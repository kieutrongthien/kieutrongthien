import React, { useState } from "react";
import Pdf from "../../editable-stuff/resume.pdf";
import {
  aboutHeading,
  aboutDescription,
  showProfilePic,
  profilePicUrl,
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {
  const [resumeURL] = useState(Pdf);

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          {showProfilePic && (
            <div className="col-5 d-none d-lg-block align-self-center text-center">
              <img
                className="border border-secondary rounded-circle img-fluid"
                src={process.env.PUBLIC_URL + "/" + profilePicUrl}
                alt="profilepicture"
                style={{ width: "280px", height: "280px", objectFit: "cover" }}
              />
            </div>
          )}
          <div className={`col-lg-${showProfilePic ? "7" : "12"}`}>
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                   className="btn btn-outline-dark btn-lg"
                   href={Pdf}
                   target="_blank"
                   rel="noreferrer noopener"
                   role="button"
                   aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
