import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import carouselImage1 from "../../images/thumbs/3132-1.jpg";
import carouselImage2 from "../../images/thumbs/IMG_1603.jpeg";
import carouselImage3 from "../../images/thumbs/IMG_1604.jpeg";
import carouselImage4 from "../../images/thumbs/IMG_6191.jpeg";
import carouselImage5 from "../../images/thumbs/IMG_6193-min.jpeg";
import carouselImage6 from "../../images/thumbs/building3.jpg";
import carouselImage7 from "../../images/thumbs/3.jpg";
// import carouselImage8 from "../../images/thumbs/1.jpg";
import carouselImage9 from "../../images/thumbs/6-min.jpg";
import carouselImage10 from "../../images/the_island/1-min.jpg";
import carouselImage11 from "../../images/greencity/1-min.jpg";


const MainCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const autoScrollInterval = setInterval(() => {
        emblaApi.scrollNext();
      }, 2000);
      
      return () => clearInterval(autoScrollInterval);
    }
  }, [emblaApi]);

  return (
    <section className="relative w-auto h-auto">
      <div id="boSlide" className="embla relative" ref={emblaRef}>
        <div className="embla__container">
        <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage8})` }}></div>
          </div>
        <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage6})` }}></div>
          </div>
          <div className="embla__slide">
            <div
              className="w-full min-w-full h-[50vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage1})` }}></div>
          </div>
          <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage10})` }}></div>
          </div>
          <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage2})` }}></div>
          </div>
          <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage11})` }}></div>
          </div>
          <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage7})` }}></div>
          </div>
          {/* <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage9})` }}></div>
          </div> */}
          <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage3})` }}></div>
          </div>
          <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage4})` }}></div>
          </div>
          <div className="embla__slide">
            <div
              className="w-full min-w-full h-[40vh] md:h-[70vh] bg-center bg-cover"
              style={{ backgroundImage: `url(${carouselImage5})` }}></div>
          </div>
        </div>

        <div className="absolute top-auto bottom-0 left-0 flex flex-col w-auto h-auto">
          <button className="btn rounded-0 bg-black hover:bg-gray-900 text-white p-3" type="button" onClick={() => scrollPrev()}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="btn rounded-0 bg-black hover:bg-gray-900 text-white p-3" type="button" onClick={() => scrollNext()}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-auto p-5 text-white bg-black top-auto absolute h-auto -bottom-8 right-0 hidden-sm-down">
        <hr className="m-0 w-[50px] bg-white mb-2" />
        <h5>
          Our
          <br />
          recent
          <br />
          projects
        </h5>
      </div>
    </section>
  );
};

export default MainCarousel;
