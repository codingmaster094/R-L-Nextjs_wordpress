"use client";
import { useEffect, useRef } from "react";

const Testimonial_Caraousel = ({ AboutAllTestimonial }) => {
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
            initializeCarousel();
          };
          document.body.appendChild(owlCarouselJS);
        };
        document.body.appendChild(jQueryScript);
      };

      const initializeCarousel = () => {
        if (carouselRef.current) {
          jQuery(carouselRef.current).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            },
          });
        }
      };

      loadOwlCarousel();

      // Cleanup function to destroy the carousel on unmount
      return () => {
        if (carouselRef.current) {
          jQuery(carouselRef.current).trigger('destroy.owl.carousel');
        }
      };
    }
  }, [AboutAllTestimonial]);

  return (
    <div className="pr-testimonal-boxs owl-carousel" ref={carouselRef}>
      {AboutAllTestimonial && AboutAllTestimonial.map((val, i) => (
        <div className="pr-testimonal-box item" key={i}>
          <div className="pr-tes-img">
            <div className="title">
              <h3>{val.about_testimonial_name}</h3>
              <p>{val.about_testimonial_designation}</p>
            </div>
          </div>
          <div className="pr-tes-content">
            <p dangerouslySetInnerHTML={{ __html: val.about_testimonial_content
                                    ?.replace(/<p>/g, "")
                                    .replace(/<\/p>/g, "") }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial_Caraousel;
