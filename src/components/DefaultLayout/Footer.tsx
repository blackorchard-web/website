import React from "react";
import { Link } from "gatsby";
import Map from "../../icons/map.svg";
import IconText from "../../icons/text.svg";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="z-depth-top bg-white">
        <div className="container py-sm-3">
          <div className="row py-5">
            <article className="col-12 col-sm-3">
              <img src={Map} style={{ position: "absolute", width: "80%", height: "80%", top: "10%", left: "10%", opacity: 0.5 }} alt="" />
              <h6 className="font-weight-bolder text-muted">ADDRESS</h6>
              <hr className="bg-inverse pb-1 ml-0 my-0 mb-2" style={{ width: 30 }} />
              <address className="">
                No 7, Port Harcourt Crescent
                <br /> Area 11 Garki, Abuja, NG.
              </address>
              <h6 className="font-weight-bolder text-muted">CONTACT US</h6>
              <hr className="bg-inverse pb-1 ml-0 my-0 mb-2" style={{ width: 30 }} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 50" className="d-block" height="20px">
                <rect x="5" y="5" width="60" height="40" fill="none" stroke="#222" strokeWidth="2" />
                <path d="M5 5 L35 30 65 5" strokeWidth="2" stroke="#222" fill="none" />
              </svg>
              <p className="mb-0">info@blackorchardgroup.com</p>
              <p>
                <span role="img" aria-label="Phone">
                  📞
                </span>
                <br />
                +2348151111880
              </p>
            </article>
            <article className="col-12 col-sm-3 pb-4 pb-sm-0">
              <h6 className="font-weight-bolder text-muted">DISCOVER</h6>
              <hr className="bg-inverse pb-1 ml-0 my-0 mb-2" style={{ width: 30 }} />
              <a href="http://facebook.com/blackorchardgroup">Facebook</a>
              <br />
              <a href="http://twitter.com/borchardgroup">Twitter</a>
              <br />
              <a href="http://instagram.com/blackorchardgroup">Instagram</a>
            </article>
            <article className="col-12 col-sm-3 pb-4 pb-sm-0">
              <h6 className="font-weight-bolder text-muted">EXPLORE</h6>
              <hr className="bg-inverse pb-1 ml-0 my-0 mb-2" style={{ width: 30 }} />
              <Link to="/">Home</Link>
              <br />
              <Link to="/about-us">About Us</Link>
              <br />
              <Link to="/our-companies">Our Companies</Link>
              <br />
              <Link to="/our-projects">Projects</Link>
            </article>
            <article className="col-12 col-sm-3 text-center">
              <img src={IconText} className="w-100 w-xs-90 mb-3" alt="" />
            </article>
          </div>
        </div>
        <hr className="m-0" />
      </footer>
      <section className="bg-muted">
        <aside className="container pt-4 pb-1 text-center">
          <div className="row">
            <article className="col-12 col-sm-5 align-self-center text-sm-left">
              <p className="small">&copy;Black Orchard Group.</p>
            </article>
            <article className="col-12 col-sm-2 align-self-start flex-first flex-sm-unordered">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="60px" className="footer-svg-link align-self-center">
                <circle r="40" cx="50" cy="50" />
                <path
                  d="M30 45 L45 30 60 45"
                  strokeWidth="5"
                  stroke="#F1F2F4"
                  fill="none"
                  strokeLinecap="round"
                  transform="translate(5,10)"
                />
              </svg>
            </article>
            <article className="col-12 col-sm-5 align-self-center text-sm-right">
              <p className="font-weight-bold small text-muted">
                Made with{" "}
                <span role="img" aria-label="Heart" className="text-danger">
                  ❤️
                </span>{" "}
                by{" "}
                <a href="http://motionwares.com" target="_blank" className="text-faded">
                  Motionwares
                </a>
              </p>
            </article>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Footer;
