"use client";
import { useEffect, useRef } from "react";

const Testimonial_Caraousel = ({ AboutAllTestimonial }) => {
  console.log("AboutAllTestimonial", AboutAllTestimonial);
  const carouselRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadOwlCarousel = async () => {
        const jQueryScript = document.createElement("script");
        jQueryScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        jQueryScript.onload = () => {
          const owlCarouselCSS = document.createElement("link");
          owlCarouselCSS.rel = "stylesheet";
          owlCarouselCSS.href =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
          document.head.appendChild(owlCarouselCSS);

          const owlCarouselJS = document.createElement("script");
          owlCarouselJS.src =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
          owlCarouselJS.onload = () => {
            window.$ = window.jQuery;
            jQuery(".pr-testimonal-boxs").owlCarousel({
              stagePadding: 200,
              margin: 20,
              loop: true,
              items: 1,
              lazyLoad: true,
              // autoplay: true,
              // autoplaySpeed: 2000,
              autoplayTimeout: 5000,
              autoplayHoverPause: true,
              nav: true,
              dots: false,
              responsive: {
                0: {
                  stagePadding: 10,
                },
                700: {
                  stagePadding: 50,
                },
                991: {
                  stagePadding: 100,
                },
                1100: {
                  stagePadding: 150,
                },
                1280: {
                  stagePadding: 200,
                },
              },
            });
          };
          document.body.appendChild(owlCarouselJS);
        };
        document.body.appendChild(jQueryScript);
      };

      loadOwlCarousel();
    }
  }, []);
  return (
    <div className="pr-testimonal-boxs owl-carousel" ref={carouselRef}>
            <div className="pr-testimonal-box item">
              <div className="pr-tes-img">
                <div className="title">
                  <h3>Marvin McKinney</h3>
                  <p>Sr. Designer</p>
                </div>
              </div>
              <div className="pr-tes-content">
                <p>
                  Ornare imperdiet fames natoque fermentum feugiat conubia
                  turpis. Aenean elementum primis egestas natoque fusce.
                </p>
              </div>
            </div>

            <div className="pr-testimonal-box item">   
              <div className="pr-tes-img">
                <div className="title">
                  <h3>Kathryn Murphy</h3>
                  <p>Sr. Designer</p>
                </div>
              </div>
              <div className="pr-tes-content">
                <p>
                  Ornare imperdiet fames natoque fermentum feugiat conubia
                  turpis. Aenean elementum primis egestas natoque fusce.
                </p>
              </div>
            </div>

            <div className="pr-testimonal-box item">  
              <div className="pr-tes-img">
                <div className="title">
                  <h3>Darrell Steward</h3>
                  <p>Sr. Designer</p>
                </div>
              </div>
              <div className="pr-tes-content">
                <p>
                  Ornare imperdiet fames natoque fermentum feugiat conubia
                  turpis. Aenean elementum primis egestas natoque fusce.
                </p>
              </div>
            </div>
          </div>
  );
};

export default Testimonial_Caraousel;
