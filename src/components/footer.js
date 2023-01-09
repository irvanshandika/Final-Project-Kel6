import React from "react";
import { Link } from "react-router-dom";
import FeedBack from "./feedback.js";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="latar">
          <FeedBack />
          <Link className="ourteam text-decoration-none" to={"/teampage"}>
            <button className="btn" style={{ backgroundColor: "silver" }}>
              OUR TEAM
            </button>
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
