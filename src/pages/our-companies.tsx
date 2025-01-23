import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../components/seo";
import Logo from "../icons/favicon.svg";
import LTD from "../icons/bogroup_ltd_logo.svg";
import MGT from "../icons/bogroup_facility_mgt_logo.svg";
import TRD from "../icons/bogroup_global_trading_logo.svg";
import Parallax from "react-rellax";

export const Head = () => <SEO title="Our Companies" />;

const CompaniesPage: React.FC<PageProps> = () => {
  return (
    <>
      <header className="container-fluid bg-default text-white">
        <aside className="container">
          <div className="row pt-sm-0 overflow-none">
            <Parallax className="col-12 col-sm-4 rellax mb-3 mb-sm-0 text-center" speed={4}>
              <img src={Logo} className="w-100 w-xs-90" alt="" />
            </Parallax>
            <div className="col-12 col-sm-6 mt-sm-auto mb-sm-5 text-center text-sm-left">
              <h1 className="mb-3 font-weight-bold">
                <span className="font-weight-light">Our</span>
                <br />
                Companies
              </h1>
              <svg viewBox="0 0 100 50" className="d-flex mx-auto ml-sm-1 w-[30px]">
                <polygon points="0,0 50,50 100,0" fill="#fff" />
              </svg>
            </div>
          </div>
        </aside>
      </header>
      <aside className="p-0 h-[15vh]">
        <svg viewBox="0 0 100 100" className="absolute top-0 w-full h-full" preserveAspectRatio="none">
          <polygon points="0,0 0,100 100,0" fill="#000" />
          <polygon points="0,100 100,0 100,100" fill="#fff" />
          <path d="M0 100,L100 0" strokeWidth={1} stroke="#999"></path>
        </svg>
      </aside>

      <section className="container">
        <div className="row py-5 my-5 justify-content-around z-depth-top">
          <aside className="col-12 col-sm-3">
            <img src={LTD} alt="Black Orchard Ltd." className="img-fluid w-100 mb-3" />
          </aside>
          <aside className="col-12 col-sm-3">
            <img src={MGT} alt="Black Orchard Facility Management Ltd." className="img-fluid w-100 mb-3" />
          </aside>
          <aside className="col-12 col-sm-3">
            <img src={TRD} alt="Black Orchard Global Trading Ltd." className="img-fluid w-100 mb-3" />
          </aside>
        </div>
      </section>
    </>
  );
};

export default CompaniesPage;
