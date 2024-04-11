import React from "react";
import "../css/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faInstagram,faYoutube,faPinterest } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="contactsection">
          <h2>dribble</h2>
          <p>Dribble is the worlds leading community for creatives to share, grow and get hired</p>
          <div className="sociallinks">
            <FontAwesomeIcon icon={faTwitter} className="FontAwesomeIcon" />
            <FontAwesomeIcon icon={faInstagram}  className="FontAwesomeIcon"/>
            <FontAwesomeIcon icon={faYoutube} className="FontAwesomeIcon" />
            <FontAwesomeIcon icon={faPinterest} className="FontAwesomeIcon" />
          </div>
        </div>
        <div className="designer col">
          <h4>For designers</h4>
          <a>Go pro!</a>
          <a>Design work</a>
          <a>Design blog</a>
          <a>Refer a friend</a>
        </div>
        <div className="Hiredesigners col">
          <h4>Hire Designers</h4>
          <a>Post a Job opening</a>
          <a>Post a freelance Project</a>
          <a>Search For Designers</a>
        </div>
        <div className="Company">
          <h4>Company</h4>
          <a>About</a>
          <a>Careers</a>
          <a>API</a>
          <a>Privacy Policy</a>
          <a>Cookie Policy</a>
        </div>
      </section>
    </>
  );
}

export default Footer;