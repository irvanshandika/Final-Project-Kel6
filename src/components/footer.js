import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="latar">
          <Link className="ourteam text-decoration-none" to={"/teampage"}>
            OUR TEAM
          </Link>
          <br />
          <br />
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
