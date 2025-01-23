import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../components/seo";
import Building from "../icons/building3.svg";
import Logo from "../images/favicon.svg";
import MainCarousel from "../components/carousel/Main";
import Parallax from "react-rellax";

export const Head = () => <SEO title="Welcome" />;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <header className="container-fluid bg-muted px-0 d-flex flex-column">
        <h6 className="font-weight-bold hidden-sm-down fh-text">REAL ESTATE DEVELOPERS</h6>
        <aside className="container">
          <div className="row justify-content-around landing-header pt-5 overflow-none">
            <div className="col-12 col-lg-4 text-muted">
              <h2 className="font-weight-light mt-sm-4 text-center text-wrap text-sm-left">
                Luxury properties
                <br />
                redefined through
                <br />
                <span className="text-underline font-weight-bold">Innovation</span> and{" "}
                <span className="text-underline font-weight-bold">Design</span>
              </h2>
            </div>
            <Parallax className="col-12 col-lg-8 align-self-end" speed={-6}>
              <img src={Building} className="w-100 -mb-[].1rem]" alt="" />
            </Parallax>
          </div>
        </aside>
      </header>
      <section className="container-fluid bg-default py-3">
        <div className="row justify-content-center text-white text-center text-sm-left">
          <div className="col-12 col-sm-1 px-sm-0 text-sm-right">
            <h1 className="flaticon-real-estate icon-3x m-0"></h1>
          </div>
          <div className="col-12 col-sm-2 align-self-center">
            <p className="mb-0">Property Development</p>
          </div>
          <hr className="w-25 hidden-sm-up bg-white" />
          <div className="col-12 col-sm-1 px-sm-0 text-sm-right">
            <h1 className="flaticon-real-estate-2 icon-3x m-0"></h1>
          </div>
          <div className="col-12 col-sm-2 align-self-center">
            <p className="mb-0">Project Finance</p>
          </div>
          <hr className="w-25 hidden-sm-up bg-white" />
          <div className="col-12 col-sm-1 px-sm-0 text-sm-right">
            <h1 className="flaticon-real-estate-3 icon-3x m-0"></h1>
          </div>
          <div className="col-12 col-sm-2 align-self-center">
            <p className="mb-0">Mortgages</p>
          </div>
        </div>
      </section>

      <MainCarousel />

      <section className="container-fluid landing-header py-5">
        <div className="absolute row justify-content-end">
          <div className="col-12 col-sm-5">
            <Parallax percentage={0.5} speed={-2}>
              <img src={Logo} className="-mr-[20rem] rellax z-depth-bottom" />
            </Parallax>
          </div>
        </div>
        <article className="container z-depth-top text-center pt-5">
          <p className="flaticon-seller display-2 mb-3 text-default services-img"></p>
          <hr className="bg-inverse pb-2 my-3 w-[30px]" />
          <h4 className="font-weight-bolder text-muted">As your partner...</h4>
          <p>We provide value for money.</p>
          <div className="row py-5 text-gray-dark text-left">
            <div className="col-12 col-sm-4">
              <h5 className="font-weight-bold m-0">Perception Redefined</h5>
              <hr className="bg-inverse pb-1 my-2 ml-0 w-[50px]" />
              <p className="mb-sm-5">We redefine perceptions of luxury through innovation, design and affordability.</p>
              <h5 className="font-weight-bold m-0">Quality</h5>
              <hr className="bg-inverse pb-1 my-2 ml-0 w-[50px]" />
              <p>
                We offer functional and responsive designs crowned by high‐end finishes and attention to detail to ensure a luxurious
                end‐product.
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <h5 className="font-weight-bolder m-0">Experience</h5>
              <hr className="bg-inverse pb-1 my-2 ml-0 w-[50px]" />
              <p>
                With our wealth of experience, we are capable of developing stand-alone/integrated solutions for you as your business
                evolves.With our experience in the construction industry and business, we are capable of developing realistic real estate
                investments that yield competitive returns on investment.
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <h5 className="font-weight-bolder m-0">Value-based Services</h5>
              <hr className="bg-inverse pb-1 my-2 ml-0 w-[50px]" />
              <p className="mb-sm-5">We love what we do and our needs-based approach ensures our services fit your requirements.</p>
              <h5 className="font-weight-bolder m-0">Value for money</h5>
              <hr className="bg-inverse pb-1 my-2 ml-0 w-[50px]" />
              <p>We offer properties in exclusive locations with innovative designs yet at competitive prices.</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default IndexPage;
