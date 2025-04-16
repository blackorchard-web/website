import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../components/seo";
import Logo from "../icons/favicon.svg";
import Parallax from "react-rellax";
import useEmblaCarousel from "embla-carousel-react";

// Import your project images

import IslandImage from "../images/the_island/1-min.jpg";
import IslandImage2 from "../images/the_island/2-min.jpg";
import IslandImage3 from "../images/the_island/3-min.jpg";
import IslandImage4 from "../images/the_island/4-min.jpg";

import twentynineImage1 from "../images/2962/1-min.jpg";
import twentynineImage2 from "../images/2962/2-min.jpg";
import twentynineImage3 from "../images/2962/3-min.jpg";

import cascadeImage1 from "../images/cascade/1-min.jpg";
import cascadeImage2 from "../images/cascade/2-min.jpg";
import cascadeImage3 from "../images/cascade/3-min.jpg";
import cascadeImage4 from "../images/cascade/4-min.jpg";
import cascadeImage5 from "../images/cascade/5-min.jpg";
import cascadeImage6 from "../images/cascade/6-min.jpg";
import cascadeImage7 from "../images/cascade/7-min.jpg";
import cascadeImage8 from "../images/cascade/8-min.jpg";

import greencityImage1 from "../images/greencity/1-min.jpg";
import greencityImage3 from "../images/greencity/3-min.jpg";
import greencityImage4 from "../images/greencity/4-min.jpg";
import greencityImage5 from "../images/greencity/5-min.jpg";
import greencityImage6 from "../images/greencity/6-min.jpg";


import threeoneImage1 from "../images/3132/1.jpg";
import threeoneImage2 from "../images/3132/2.jpg";
import threeoneImage3 from "../images/3132/3.jpg";
import threeoneImage4 from "../images/3132/4.jpg";
import threeoneImage5 from "../images/3132/5.jpg";
import threeoneImage6 from "../images/3132/6.jpg";

import tenninetytwoImage1 from "../images/1092/1-min.jpg";
import tenninetytwoImage2 from "../images/1092/2-min.jpg";
import tenninetytwoImage3 from "../images/1092/3-min.jpg";
import tenninetytwoImage4 from "../images/1092/4-min.jpg";
import tenninetytwoImage5 from "../images/1092/5-min.jpg";
import tenninetytwoImage6 from "../images/1092/6-min.jpg";
import tenninetytwoImage7 from "../images/1092/7-min.jpg";
import tenninetytwoImage8 from "../images/1092/8-min.jpg";
import tenninetytwoImage9 from "../images/1092/9-min.jpg";

import blacklofts from "../images/blackLofts/1.jpg";
import blacklofts2 from "../images/blackLofts/2.jpg";
import blacklofts3 from "../images/blackLofts/3.jpg";
import blacklofts4 from "../images/blackLofts/4.jpg";
import blacklofts5 from "../images/blackLofts/5.jpg";
import blacklofts6 from "../images/blackLofts/6.jpg";








export const Head = () => <SEO title="Our Projects" />;


const projects = [
  // {
  //   id: "boulevard",
  //   data: {
  //     name: "The Boulevard",
  //     location: "Maitama Extension",
  //     status: "Under Construction",
  //     completion: "2026",
  //     description: {
  //       text: "94 Units of Apartments, Terraces, Semi & Detached Villas"
  //     },
  //     // pictures: [
  //     //   {
  //     //     image: {
  //     //       src: BoulevardImage,
  //     //       alt: "The Boulevard"
  //     //     }
  //     //   }
  //     // ]
  //   }
  // },
  {
    id: "twentynine",
    data: {
      name: "TwentyNine-SixtyTwo Terraces",
      location: "Asokoro",
      status: "Completed",
      completion: "2024",
      description: {
        text: "4 Bedroom Terraces - Price 200m"
      },
      pictures: [
        {
          image: {
            src: twentynineImage1,
            alt: "TwentyNine-SixtyTwo Terraces"
          }
        },
        {
          image: {
            src: twentynineImage2,
            alt: "TwentyNine-SixtyTwo Terraces"
          }
        },
        {
          image: {
            src: twentynineImage3,
            alt: "TwentyNine-SixtyTwo Terraces"
          }
        }
      ]
    }
  },
  {
    id: "tenninetyTwo",
    data: {
      name: "Ten-NinetyTwo Residence",
      location: "Dawaki",
      status: "Under Construction",
      completion: "December 2026",
      description: {
        text: "3 Bedroom Apartments & 4 Bedroom Terraces - Sold Out"
      },
      pictures: [
        {
          image: {
            src: tenninetytwoImage1,
            alt: "Ten-NinetyTwo Residence"
          },
        },
        {
          image: {
            src: tenninetytwoImage2,
            alt: "Ten-NinetyTwo Residence"
          },
        },
        {
          image: {
            src: tenninetytwoImage3,
            alt: "Ten-NinetyTwo Residence"
          },
        },
        {
          image: {
            src: tenninetytwoImage4,
            alt: "Ten-NinetyTwo Residence"
          },
        },
        {
          image: {
            src: tenninetytwoImage5,
            alt: "Ten-NinetyTwo Residence"
          },
        },
        {
          image: {
            src: tenninetytwoImage6,
            alt: "Ten-NinetyTwo Residence"
          },
        },
        {
          image: {
            src: tenninetytwoImage7,
            alt: "Ten-NinetyTwo Residence"
          },
        },
        {
          image: {
            src: tenninetytwoImage8,
            alt: "Ten-NinetyTwo Residence"
          },
        },
        {
          image: {
            src: tenninetytwoImage9,
            alt: "Ten-NinetyTwo Residence"
          },
        }, 
      ]
    }
  },
  {
    id: "island",
    data: {
      name: "The Island",
      location: "Asokoro",
      status: "Coming Soon",
      completion: "December 2026",
      description: {
        text: "7 Bedroom Luxury Villas"
      },
      pictures: [
        {
          image: {
            src: IslandImage,
            alt: "The Island"
          }
        },
        {
          image: {
            src: IslandImage2,
            alt: "The Island 2"
          }
        },
        {
          image: {
            src: IslandImage3,
            alt: "The Island 3"
          }
        },
        {
          image: {
            src: IslandImage4,
            alt: "The Island 4"
          }
        }
      ]
    }
  },
  {
    id: "cascade",
    data: {
      name: "The Cascade",
      location: "Asokoro",
      status: "Under Construction",
      completion: "January 2026",
      description: {
        text: "7 Bedroom Luxury Villas"
      },
      pictures: [
        {
          image: {
            src: cascadeImage1,
            alt: "The Cascade"
          }
        },
        {
          image: {
            src: cascadeImage2,
            alt: "The Cascade"
          }
        },
        {
          image: {
            src: cascadeImage3,
            alt: "The Cascade"
          }
        },
        {
          image: {
            src: cascadeImage4,
            alt: "The Cascade"
          }
        },
        {
          image: {
            src: cascadeImage5,
            alt: "The Cascade"
          }
        },
        {
          image: {
            src: cascadeImage6,
            alt: "The Cascade"
          }
        },
        {
          image: {
            src: cascadeImage7,
            alt: "The Cascade"
          }
        },
        {
          image: {
            src: cascadeImage8,
            alt: "The Cascade"
          }
        }



      ]
    }
  },
  {
    id: "greencity",
    data: {
      name: "Green City Kano",
      location: "Kwanar Dawaki, Kano",
      status: "Under Construction",
      completion: "2026",
      description: {
        text: "Mass Housing"
      },
      pictures: [
        {
          image: {
            src: greencityImage1,
            alt: "Green City Kano"
          }
        },
        {
          image: {
            src: greencityImage3,
            alt: "Green City Kano"
          }
        },
        {
          image: {
            src: greencityImage4,
            alt: "Green City Kano"
          }
        },
        {
          image: {
            src: greencityImage5,
            alt: "Green City Kano"
          }
        },
        {
          image: {
            src: greencityImage6,
            alt: "Green City Kano"
          }
        }
      ]
    }
  },
  {
    id: "threeone",
    data: {
      name: "ThreeOne-ThreeTwo Villas",
      location: "Asokoro",
      status: "Completed",
      completion: "2024",
      description: {
        text: "5 bedroom villas +2 room BQ"
      },
      pictures: [
        {
          image: {
            src: threeoneImage1,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: threeoneImage2,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: threeoneImage3,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: threeoneImage4,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: threeoneImage5,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: threeoneImage6,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        }

      ]
    },
    
  },
  {
    id: "blacklofts",
    data: {
      name: "Black Orchard Lofts",
      location: "Zaria Kano",
      status: "Completed",
      completion: "2024",
      description: {
        text: "Studio Apartments"
      },
      pictures: [
        {
          image: {
            src: blacklofts,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts2,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts3,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts4,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts5,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts6,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        }

      ]
    },
    
  },
  {
    id: "seed",
    data: {
      name: "The Seed Apartment",
      location: "Katampe, Abuja",
      status: "Completed",
      completion: "2015",
      description: {
        text: "6 № 4 Bedroom Terraces"
      },
      pictures: [
        {
          image: {
            src: blacklofts,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts2,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts3,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts4,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts5,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        },
        {
          image: {
            src: blacklofts6,
            alt: "ThreeOne-ThreeTwo Villas"
          }
        }

      ]
    },
    
  },
];

const ProjectsPage: React.FC<PageProps> = () => {
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null);

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
                Projects
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
          <h4 className="font-weight-bolder text-default m-0">Our Projects</h4>
          <hr className="bg-default pb-2 my-3 w-[30px]" />
          <p>Luxury properties redefined through innovation and design</p>
        </article>
        <div className="row pt-5 justify-content-around">
          {projects.map((item, index) => (
            <aside className="col-12 col-sm-6 col-lg-5 mb-5" key={index}>
              <div className="shadow rounded h-100 overflow-hidden"
                   onMouseEnter={() => setHoveredProject(item.id)}
                   onMouseLeave={() => setHoveredProject(null)}>
                <div className="carousel-inner position-relative">
                  {item.data.pictures && item.data.pictures.length > 1 ? (
                    <EmblaCarousel images={item.data.pictures} isHovered={hoveredProject === item.id} />
                  ) : item.data.pictures && item.data.pictures.length > 0 ? (
                    <img
                      className="w-full h-[30vh] md:h-[50vh] object-cover border border-gray-100 bg-gray-100"
                      src={item.data.pictures[0].image.src}
                      alt={item.data.pictures[0].image.alt}
                    />
                  ) : (
                    <div className="w-full h-[30vh] md:h-[50vh] bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500">No image available</p>
                    </div>
                  )}
                  <span className="absolute w-auto h-auto top-4 left-4 dropped-shadow border border-solid border-white text-white text-sm px-2 py-1 font-semibold drop-shadow-lg uppercase">
                    {item.data.status}
                  </span>
                </div>
                <div className="card-block font-weight-bolder small p-4">
                  <p className="text-faded m-0 small font-weight-bolder">PROJECT NAME</p>
                  <p className="mb-3">{item.data.name}</p>
                  <p className="text-faded m-0 small font-weight-bolder">LOCATION</p>
                  <p className="mb-3">{item.data.location}</p>
                  <p className="text-faded m-0 small font-weight-bolder">STATUS</p>
                  <p className="mb-3">{item.data.status}</p>
                  <p className="text-faded m-0 small font-weight-bolder">COMPLETION</p>
                  <p className="mb-3">{item.data.completion}</p>
                  <p className="text-faded m-0 small font-weight-bolder">DESCRIPTION</p>
                  <p className="card-text mb-3">{item.data.description.text}</p>
                </div>
              </div>
            </aside>
          ))}
        </div>
      </section>
    </>
  );
};

const EmblaCarousel: React.FC<{ images: { image: { src: string; alt: string } }[], isHovered: boolean }> = ({ images, isHovered }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isHoveredState, setIsHovered] = React.useState(false);

  // Auto-scroll functionality
  React.useEffect(() => {
    let autoScrollInterval: NodeJS.Timeout | null = null;

    if (isHovered || isHoveredState) {
      if (emblaApi) {
        autoScrollInterval = setInterval(() => {
          emblaApi.scrollNext();
        }, 3000); 
      }
    }

    return () => {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    };
  }, [isHovered, isHoveredState, emblaApi]);

  return (
    <div
      className="embla"
      ref={emblaRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="embla__container">
        {images.map((img, index) => (
          <div className="embla__slide" key={index}>
            <div
              className="w-full h-[30vh] md:h-[50vh] bg-center bg-cover transition-all duration-300"
              style={{ 
                backgroundImage: `url(${img.image.src})`, 
                filter: (isHovered || isHoveredState) ? 'none' : 'grayscale(100%)' // Apply greyscale filter
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
