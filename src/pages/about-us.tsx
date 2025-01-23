import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../components/seo";
import Logo from "../icons/favicon.svg";
import NAS from "../images/thumbs/nas.jpg";
import MUS from "../images/thumbs/mus.jpg";
import ORG from "../icons/bogroup_organogram.svg";
import Parallax from "react-rellax";

export const Head = () => <SEO title="About Us" />;

const AboutPage: React.FC<PageProps> = () => {
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
                <span className="font-weight-light">About</span>
                <br />
                Black Orchard
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

      <section className="container-fluid landing-header">
        <div className="row pt-5 justify-content-around z-depth-top">
          <div className="col-12 col-sm-3 col-lg-2 text-sm-right text-center overflow-none">
            <p className="display-2 text-faded font-weight-bolder mb-0">1</p>
            <p className="text-faded font-weight-bolder mb-1">WHO WE ARE</p>
            <hr className="my-0 mr-sm-0 bg-faded border-0 pb-1 w-[50px]" />
            <svg viewBox="0 0 100 100" width="5px" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" width="100" height="100" fill="#f7f7f7" />
            </svg>
            <hr className="hidden-sm-down m-0 bg-faded border-0 pb-1 line-left w-[50px]" />
          </div>
          <aside className="col-12 col-sm-6">
            <h1 className="flaticon-contract icon-4x m-0"></h1>
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <p className="text-justify m-0">
              <strong className="font-weight-bolder">
                <span className="initialism">B</span>lack Orchard Ltd
              </strong>{" "}
              was registered in 2011 as a property development company in Abuja. We strive towards quality service delivery to our clientele
              and customers and have grown to be a reliable property development company with a proven track record. Our strength lies in
              our dedication to grow businesses and also the desire to provide value for money.
            </p>
            <p className="text-center display-4">…</p>
            <p className="text-justify m-0">
              We develop projects that address the target market requirements, balanced with the site conditions and planning constraints to
              arrive at units that are affordable yet functional. We pride ourselves for offering quality off-plan and completed
              developments on schedule.
            </p>
            <p className="text-center display-4">…</p>
            <p className="text-justify mb-4">
              <strong className="font-weight-bolder">Our Vision</strong> is to become a reliable property developer with a sizeable
              portfolio of residential and commercial properties all over Nigeria. We aim to provide exquisite locations, competitive prices
              and luxurious properties to our partners.
            </p>
          </aside>
        </div>
        <div className="row pt-3 justify-content-around z-depth-top">
          <div className="col-12 col-sm-3 col-lg-2 text-sm-right text-center overflow-none">
            <p className="display-2 text-faded font-weight-bolder mb-0">2</p>
            <p className="text-faded font-weight-bolder mb-1">WHAT WE DO</p>
            <hr className="my-0 mr-sm-0 bg-faded border-0 pb-1 w-[50px]" />
            <svg viewBox="0 0 100 100" width="5px" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" width="100" height="100" fill="#f7f7f7" />
            </svg>
            <hr className="hidden-sm-down m-0 bg-faded border-0 pb-1 line-left w-[50px]" />
          </div>
          <aside className="col-12 col-sm-6">
            <h1 className="flaticon-real-estate icon-4x m-0"></h1>
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <h2 className="font-weight-bold mb-0">Property Development</h2>
            <p className="text-justify">
              We acquire land in high yielding locations with basic infrastructure in place and leverage that to design and construct
              properties that provide a healthy return per square meter.
            </p>
            <p className="text-justify mb-5">
              We develop units for sale either off-plan or completed, to suit the cashflow of our customers. Our experience in architecture,
              project management, planning permissions and construction, helps our abilty to deliver projects of the desired quality, on
              budget and on time.
            </p>

            <h1 className="flaticon-real-estate-2 icon-4x m-0"></h1>
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <h2 className="font-weight-bold mb-0">Project Finance</h2>
            <p className="text-justify">
              We also partner with investors and landowners to jointly develop properties based on agreed equity contributions. Our
              experience in international business, procurement and business solutions provides us with an impeccable advantage to provide a
              win-win investment for our partners.
            </p>
            <p className="text-justify mb-5">
              Returns on such projects can be tailored to revenue generated from the completed project based on Build-Operate &amp; Transfer
              (B.O.T) or Special Purpose Vehicles (SPV).
            </p>

            <h1 className="flaticon-real-estate-3 icon-4x m-0"></h1>
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <h2 className="font-weight-bold mb-0">Mortgages</h2>
            <p className="text-justify mb-5">
              We offer intending owners of our properties, mortgage plans that are attractive and hassle free. All we need is a verified
              income account that meets a payment structure for the desired property. Another product in addition to the mortgage is a
              rent‐to-own plan that allows owners to pay rent towards owning their property.
            </p>
          </aside>
        </div>
        <div className="row pt-3 justify-content-around z-depth-top">
          <div className="col-12 col-sm-3 col-lg-2 text-sm-right text-center overflow-none">
            <p className="display-2 text-faded font-weight-bolder mb-0">3</p>
            <p className="text-faded font-weight-bolder mb-1">OUR TEAM</p>
            <hr className="my-0 mr-sm-0 bg-faded border-0 pb-1 w-[50px]" />
            <svg viewBox="0 0 100 100" width="5px" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" width="100" height="100" fill="#f7f7f7" />
            </svg>
          </div>
          <aside className="col-12 col-sm-6 pb-5">
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <h2 className="font-weight-bold mb-0">Management</h2>
            <div className="row pt-3 py-5 mt-5">
              <article className="col-12 col-sm-6 pb-5 mb-4 mb-sm-0 pb-sm-0 pl-sm-0">
                <div className="card bg-inverse shadow-0">
                  <img
                    src={NAS}
                    width="150"
                    height="150"
                    className="d-block mx-auto bg-white rounded-circle border-4 border-solid border-white -mt-[75px] object-cover object-top"
                  />
                  <div className="card-block">
                    <h5 className="text-white font-weight-bold text-center">Nasiru Ibrahim</h5>
                    <p className="card-text text-faded text-justify mb-4 pb-2">
                      Nasiru Ibrahim is a graduate of architecture from the prestigious Ahmadu Bello University, Zaria and a full member of
                      the Nigerian Institute of Architects. He started his career as an architect/project management consultant and gained a
                      wealth of diverse experience for over 15 years while working with and learning from what one might call veteran
                      architects at Multisystems Consultants. As part of his continuing professional development, he went on to acquire an
                      Msc in Project Management at the University of Reading in the United Kingdom while still carrying out his primary
                      duties of managing an array of complex and challenging projects. With this industry experience he Co-Founded Black
                      Orchard Group in the year 2011; a company that develops and manages premium real estate aimed at creating value in
                      great locations. Black Orchard has successfully delivered 4 estates and are currently developing 5 others in locations
                      around Abuja, Kaduna and Kano. Nasiru’s industry expertise, as well as his ability to adapt to the ever-changing
                      market conditions has helped the company’s ability to deliver projects to the desired quality, on budget, and on time.
                      Outside of work, Nasiru is a 3-time marathon finisher and enjoys travelling, golf, and a host of other outdoor
                      activities.
                    </p>
                  </div>
                </div>
              </article>
              <article className="col-12 col-sm-6 pr-sm-0">
                <div className="card bg-inverse h-100 shadow-0">
                  <img
                    src={MUS}
                    width="150"
                    height="150"
                    className="d-block mx-auto bg-white rounded-circle border-4 border-solid border-white -mt-[75px] object-cover object-top"
                  />
                  <div className="card-block">
                    <h5 className="text-white font-weight-bold text-center">Mustapha Abdulsalam</h5>
                    <p className="card-text text-faded text-justify mb-2">
                      A founding partner and executive director of Black Orchard Ltd. He has over 15 years of international business
                      experience and a flare for procurements, marketing and business solutions. His public relations, management and
                      administrative skills ensure that our operations are efficient and prudent. His sound understanding of procurements
                      and international markets provides us with an impeccable advantage.
                    </p>
                  </div>
                </div>
              </article>

              <div className="col-12 py-5">
                <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
                <h2 className="font-weight-bold mb-0">Organogram</h2>
                <img src={ORG} className="img-fluid w-100" alt="Black Orchard Group Organogram" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
