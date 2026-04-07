import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer ">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="ct-footer-item col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <div className="footer-logo-wrap">
                  <Image 
                    src="/images/common/footer_logo.webp" 
                    alt="ENERCON Logo" 
                    width={200}
                    height={88}
                  />
                  <p className="footer-desc">
                    Welcome to ENERCON Group, your trusted partner in waterproofing and energy conservation solutions.
                    With head office in Florida, USA and regional presence in Europe and Middle East, we specialize in supplying
                    top-tier waterproofing products for residential, commercial, and industrial projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="ct-footer-item col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h3 className="footer-col-title">
                  Product Categories
                </h3>
                <ul className="footer-links">
                  <li>
                    <Link href="/enerflex-sp-300">
                      Waterproof Coatings
                    </Link>
                  </li>
                  <li>
                    <Link href="/enerseal-tape">
                      Adhesives &amp; Sealants
                    </Link>
                  </li>
                  <li>
                    <Link href="/cool-roof-coatings">
                      Cool Roof Coatings
                    </Link>
                  </li>
                  <li>
                    <Link href="/roof-restoration">
                      Roof Restoration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="ct-footer-item col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h3 className="footer-col-title">
                  GET IN TOUCH
                </h3>
                <ul className="footer-links footer-contact-links">
                  <li>
                    <a href="tel:+17867260788">
                      <FaPhone className="footer-icon" />
                      +1 786 726 0788
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@enercon-group.com">
                      <FaEnvelope className="footer-icon" />
                      info@enercon-group.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://maps.app.goo.gl/dV5cztEXG718XHY78" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaMapMarkerAlt className="footer-icon" />
                      Tampa, FL 33624, USA
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.linkedin.com/company/enercongroup" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="footer-icon" />
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="ct-footer-item col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h2 className="footer-widget-title">GET Direction</h2>
                <div className="footer-map-card">
                  <a 
                    href="https://maps.google.com/maps?q=Northdale+Blvd,+Tampa,+Florida+US&t=&z=14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-map-link"
                    title="Get directions to our Tampa, FL office"
                    aria-label="Get directions to our Tampa, FL office on Google Maps"
                  >
                    <div className="footer-map-bg">
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="bottom-copyright">
              <div>2026 &copy; All rights reserved by Enercon Group</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="ct-scroll-top" aria-label="Scroll to top">
        <i className="ti-angle-up">↑</i>
      </a>
    </footer>
  );
}
