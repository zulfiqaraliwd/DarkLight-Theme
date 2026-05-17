import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h1>Zulfiqar Ali</h1>
          <p>
            Build modern and responsive websites with React and Tailwind CSS.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: zulfiqarali@gmail.com</p>
          <p>Phone: +92 3335253373</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Zulfiqar Ali. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
