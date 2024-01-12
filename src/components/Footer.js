import React from "react";
import { LinkedIn, GitHub,} from "@mui/icons-material";

import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://github.com/ErikTsai" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </Link>
        <Link to="https://linkedin.com/in/erik-tsai" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </Link>
      </div>
      <p className="copyright"> &copy; 2023 Erik Tsai. </p>
    </div>
  );
}

export default Footer;
