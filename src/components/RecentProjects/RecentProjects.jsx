import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./RecentProjects.css";

const RecentProjects = () => {
  const swiperRef = useRef(null);
  const projects = [
    { id: 1, image: "https://picsum.photos/200/300?grayscale&random=1" },
    { id: 2, image: "https://picsum.photos/200/300?grayscale&random=2" },
    { id: 3, image: "https://picsum.photos/200/300?grayscale&random=3" },
    { id: 4, image: "https://picsum.photos/200/300?grayscale&random=4" },
    { id: 5, image: "https://picsum.photos/200/300?grayscale&random=5" },
    { id: 6, image: "https://picsum.photos/200/300?grayscale&random=6" },
    { id: 7, image: "https://picsum.photos/200/300?grayscale&random=7" },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className="recent-parent-container">
      <div className="sub-recent-container">
        <div className="recent-left-container">
          <div className="curve-container">
            <h3 className="curve-heading">
              Recent <br /> <span>Projects</span>
            </h3>
            <p className="curve-description">
              Discover our innovative web agency projects showcasing remarkable
              creativity, cutting-edge design, and powerful digital solutions
              that transform ideas into success.
            </p>
          </div>
        </div>

        <div className="recent-right-container">
          <div className="slider-container">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              loop={true}
              spaceBetween={20}
              slidesPerView={3}
              speed={600}
              centeredSlides={false}
              observer={true}
              observeParents={true}
              breakpoints={{
                320: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="card">
                    <img
                      src={project.image}
                      alt={`Project ${project.id}`}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="navigation">
              <button
                onClick={() => swiperRef.current.swiper.slidePrev()}
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => swiperRef.current.swiper.slideNext()}
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
