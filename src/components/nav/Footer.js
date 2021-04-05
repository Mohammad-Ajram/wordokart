import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              WordOkart is an online store where you purchase book of various
              kinds.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Popular Categories</h6>
            <ul className="footer-links">
              <Link to="/">
                <li>Browse all books</li>
              </Link>
              <Link to="/">
                {" "}
                <li>Browse by authors</li>
              </Link>
              <Link to="/">
                {" "}
                <li>Browse by genres</li>
              </Link>
              <Link to="/">
                {" "}
                <li>Best Sellers</li>
              </Link>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              {/* <li>
                <Link to="/contact">Contact Us</Link>
              </li> */}
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/feedback">Give Feedback</Link>
              </li>
              <li>
                <Link to="/faq">FAQ's</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <Link to="/"> WordOkart.com</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  target="/"
                  href="https://www.facebook.com"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  className="instagram"
                  target="/"
                  href="https://www.instagram.com"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
