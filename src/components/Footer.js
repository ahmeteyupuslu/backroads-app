import React from "react";
import { pageLinks, socialLinks } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab as brandIcons } from "@fortawesome/free-brands-svg-icons";
import PageLinks from "./PageLinks";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <FontAwesomeIcon icon={brandIcons[icon]} />
              </a>
            </li>
          );
        })}
      </ul>
      
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
