import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import css from "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="footer-img">
            <img className="logo-footer" src="/images/logo riverstory .png" alt="logo-footer" />
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul className="recursos">
              <li><a href="#">Idiomas</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Siga-nos</h4>
            <div className="social-links">
              {/* <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a> */}
            </div>
            <hr />
            <div className="footerBottom">
              <p>Copyright &copy;2024 <span className="designer">RIVERSTORY</span></p>
            </div>
          </div>
        </div>
      </div>
  </footer>
  );
};

export default Footer;