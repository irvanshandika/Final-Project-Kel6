import React from "react";
import AboutMe from "./aboutme.js";
class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="latar">
          <AboutMe />
          <p className="text-side text-dark">
            © | Created by
            <a className="text-dark text-decoration-none"> Kelompok 6 IF07 </a>
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
