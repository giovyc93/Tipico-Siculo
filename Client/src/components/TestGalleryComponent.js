import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../index.css";
import ceo from "../assets/img/ceo.png";

gsap.registerPlugin(ScrollTrigger);

const YourComponent = () => {
  useEffect(() => {
    let iteration = 0;

    const spacing = 0.1,
      snap = gsap.utils.snap(spacing),
      cards = gsap.utils.toArray(".cards li"),
      seamlessLoop = buildSeamlessLoop(cards, spacing),
      scrub = gsap.to(seamlessLoop, {
        totalTime: 0,
        duration: 0.5,
        ease: "power3",
        paused: true,
      });

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
          wrapForward(self);
        } else if (
          self.progress < 1e-5 &&
          self.direction < 0 &&
          !self.wrapping
        ) {
          wrapBackward(self);
        } else {
          scrub.vars.totalTime = snap(
            (iteration + self.progress) * seamlessLoop.duration()
          );
          scrub.invalidate().restart();
          self.wrapping = false;
        }
      },
      end: "+=3000",
      pin: ".gallery",
    });

    function wrapForward(trigger) {
      iteration++;
      trigger.wrapping = true;
      trigger.scroll(trigger.start + 1);
    }

    function wrapBackward(trigger) {
      iteration--;
      if (iteration < 0) {
        iteration = 9;
        seamlessLoop.totalTime(
          seamlessLoop.totalTime() + seamlessLoop.duration() * 10
        );
        scrub.pause();
      }
      trigger.wrapping = true;
      trigger.scroll(trigger.end - 1);
    }

    function scrubTo(totalTime) {
      let progress =
        (totalTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration();
      if (progress > 1) {
        wrapForward(trigger);
      } else if (progress < 0) {
        wrapBackward(trigger);
      } else {
        trigger.scroll(
          trigger.start + progress * (trigger.end - trigger.start)
        );
      }
    }

    document
      .querySelector(".next")
      .addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
    document
      .querySelector(".prev")
      .addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));
  }, []);

  function buildSeamlessLoop(items, spacing) {
    const overlap = Math.ceil(1 / spacing);
    const startTime = items.length * spacing + 0.5;
    const loopTime = (items.length + overlap) * spacing + 1;
    const rawSequence = gsap.timeline({ paused: true });
    const seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        if (this._time === this._dur) {
          this._tTime += this._dur - 0.01;
        }
      },
    });
    const l = items.length + overlap * 2;

    gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

    for (let i = 0; i < l; i++) {
      const index = i % items.length;
      const item = items[index];
      const time = i * spacing;

      rawSequence
        .fromTo(
          item,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            zIndex: 100,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.in",
            immediateRender: false,
          },
          time
        )
        .fromTo(
          item,
          { xPercent: 400 },
          {
            xPercent: -400,
            duration: 1,
            ease: "none",
            immediateRender: false,
          },
          time
        );

      if (i <= items.length) {
        seamlessLoop.add("label" + i, time);
      }
    }

    rawSequence.time(startTime);

    seamlessLoop
      .to(rawSequence, {
        time: loopTime,
        duration: loopTime - startTime,
        ease: "none",
      })
      .fromTo(
        rawSequence,
        { time: overlap * spacing + 1 },
        {
          time: startTime,
          duration: startTime - (overlap * spacing + 1),
          immediateRender: false,
          ease: "none",
        }
      );

    return seamlessLoop;
  }

  return (
    <div className="gallery">
      <ul className="cards">
        <li>
          <img src={ceo}></img>
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
      <div className="actions">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
};

export default YourComponent;
