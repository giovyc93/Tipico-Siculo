import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import palermo from "../assets/img/Palermo1.jpg";
import palermo1 from "../assets/img/Palermo5.jpeg";
import palermo2 from "../assets/img/Palermo7.jpg";
import palermo3 from "../assets/img/Palermo4.jpg";

gsap.registerPlugin(ScrollTrigger);

const BackgroundPage = () => {
  useEffect(() => {
    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    const sections = document.querySelectorAll(".section");

    sections.forEach((section, i) => {
      const bg = section.querySelector(".bg");

      const setBackgroundImage = (imageUrl) => {
        bg.style.backgroundImage = `url(${imageUrl})`;
      };

      if (i === 0) {
        setBackgroundImage(palermo);
      } else if (i === 1) {
        setBackgroundImage(palermo2);
      } else if (i === 2) {
        setBackgroundImage(palermo3);
      } else if (i === 3) {
        setBackgroundImage(palermo1);
      }

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);
  return (
    <>
      <section
        className="section"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="bg "></div>
        <h2 className="homePageTitle"></h2>
        <div className="form__button">
          <a className="aHome" href="/discover">
            <input type="submit" className="button__content1" value="ACCEDI" />
          </a>
        </div>
      </section>
      <section
        className="section"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="bg"></div>
        <h2 className="homePageTitle">Lorem ipsum dolor sit amet</h2>
      </section>
      <section
        className="section"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="bg"></div>
        <h2 className="homePageTitle3">Lorem ipsum dolor sit amet</h2>
      </section>
      <section
        className="section"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="bg"></div>
        <h2 className="homePageTitle4">Lorem ipsum dolor sit amet</h2>
      </section>
    </>
  );
};

export default BackgroundPage;
