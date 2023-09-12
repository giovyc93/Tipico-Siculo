import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import oss1 from "../assets/img/sfondo.jpg";

const Feature = ({
  imageSrc,
  title,
  description,
  revealDirection,
  classDiff,
}) => {
  useEffect(() => {
    const animateFrom = (elem, direction) => {
      direction = direction || 1;
      let x = 0;
      let y = direction * 100;
      if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
      }
      elem.style.transform = `translate(${x}px, ${y}px)`;
      elem.style.opacity = "0";
      gsap.fromTo(
        elem,
        { x, y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto",
        }
      );
    };

    const hide = (elem) => {
      gsap.set(elem, { autoAlpha: 0 });
    };

    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll(".gs_reveal");
    elements.forEach((elem) => {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: () => animateFrom(elem),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem),
      });
    });
  }, []);

  return (
    <div className={`${classDiff} ${revealDirection}`}>
      <div className="containerImgContent ipsGrid_span5 gs_reveal">
        <img className="imageInside" src={imageSrc} alt="" />
      </div>
      <div className={`containerTextContent ${revealDirection}`}>
        <h2 className="heading_large gs_reveal">{title}</h2>
        <p className="gs_reveal">{description}</p>
      </div>
    </div>
  );
};

const AnimatedContent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <div className="cInnerContent">
        <h2 className="header-section blackTitle gs_reveal ipsType_center">
          Prismed Robotics
        </h2>

        <div className="features">
          <Feature
            imageSrc="{oss1}"
            title="Robotics"
            description="Prismed Robotics"
            revealDirection="gs_reveal_fromRight"
            classDiff="contentDiffRobotics"
          />
        </div>
        <h2 className="header-section contentTitle gs_reveal ipsType_center">
          Robotics Services
        </h2>
      </div>
      
    </>
  );
};

export default AnimatedContent;
