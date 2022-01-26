import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Office Location</h4>
        <p>1432 West Sancarlos St., San Jose State University</p>

      </div>

      <div className="midFooter">
        <h1>Hermit Valley</h1>
        <p>Insert Moto</p>

        <p>Copyrights "year" &copy; HermitValley</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/explore/tags/hermitvalley/?hl=en">Instagram</a>
        <a href="http://youtube.com/hermitvalley">Youtube</a>
        <a href="http://instagram.com/hermitvalley">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
