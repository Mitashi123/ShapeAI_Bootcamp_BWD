import React from "react";

var currYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <div className="footer">
        <p>Copyright @ {currYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
