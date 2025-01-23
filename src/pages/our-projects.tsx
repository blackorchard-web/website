import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../components/seo";
import Logo from "../icons/favicon.svg";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import LTD from "../icons/bogroup_ltd_logo.svg";
import MGT from "../icons/bogroup_facility_mgt_logo.svg";
import TRD from "../icons/bogroup_global_trading_logo.svg";
import Parallax from "react-rellax";

export const Head = () => <SEO title="Our Projects" />;

export const pageQuery = graphql`
  {
    allPrismicProject(sort: { data: { status: ASC } }) {
      nodes {
        id
        data {
          completion
          description {
            html
            text
          }
          location
          name
          status
          pictures {
            image {
              gatsbyImageData(placeholder: BLURRED)
              alt
            }
          }
        }
      }
    }
  }
`;

const ProjectsPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const { nodes } = data.allPrismicProject;
  console.debug(data);
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

      <section className="container z-depth-top">
        <article className="text-center">
          <h4 className="font-weight-bolder text-default m-0">Recent Projects</h4>
          <hr className="bg-default pb-2 my-3 w-[30px]" />
          <p>Services tailored for building value.</p>
        </article>
        <div className="row pt-5 justify-content-around">
          {data &&
            nodes.length > 0 &&
            nodes.map((item: any, index: any) => (
              <aside className="col-12 col-sm-6 col-lg-5 mb-5" key={index}>
                <div className="shadow rounded h-100 overflow-hidden">
                  <div className="carousel-inner">
                    <GatsbyImage
                      className="w-full h-[30vh] md:h-[50vh] object-cover border border-gray-100 bg-gray-100"
                      image={item.data.pictures[0].image.gatsbyImageData}
                      alt={item.data.pictures[0].image.gatsbyImageData.alt}
                    />
                    <span className="absolute w-auto h-auto top-4 left-4 dropped-shadow border border-solid border-white text-white text-sm px-2 py-1 font-semibold drop-shadow-lg uppercase">
                      {item.data.status}
                    </span>
                  </div>
                  <div className="card-block font-weight-bolder small">
                    <p className="text-faded m-0 small font-weight-bolder">PROJECT NAME</p>
                    <p className="mb-1">{item.data.name}</p>
                    <p className="text-faded m-0 small font-weight-bolder">LOCATION</p>
                    <p className="mb-1">{item.data.location}</p>
                    <p className="text-faded m-0 small font-weight-bolder">STATUS</p>
                    <p className="mb-1">Coming Soon</p>
                    <p className="text-faded m-0 small font-weight-bolder">COMPLETION</p>
                    <p className="mb-1">2024</p>
                    <p className="text-faded m-0 small font-weight-bolder">DESCRIPTION</p>
                    <p className="card-text mb-1">Mass Housing</p>
                    <ul className="list-unstyled text-muted font-weight-bold"></ul>
                  </div>
                </div>
              </aside>
            ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
