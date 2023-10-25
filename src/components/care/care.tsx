import { useLayoutEffect, useRef, useState } from "preact/hooks";
import { gsap } from "gsap";

import "./care.css";

import people from "../../assets/people.jpg";
import risk from "../../assets/risk.svg";
import onboarding from "../../assets/onboarding.svg";
import highend from "../../assets/highend.svg";

function Care() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const context = useRef(null);

  useLayoutEffect(function () {
    let ctx = gsap.context(() => {
      gsap.to(".care-image-people", {
        scrollTrigger: {
          trigger: ".care-image",
          start: "top bottom",
          end: "center center",
          scrub: true,
          // markers: true,
        },
        marginRight: "0%",
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".care-text-story", {
        scrollTrigger: {
          trigger: ".care-text-story",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
        lineHeight: 1.5,
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".no-risk", {
        scrollTrigger: {
          trigger: ".no-risk",
          start: "top bottom",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
        translateX: "0%",
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".simple-onboarding", {
        scrollTrigger: {
          trigger: ".simple-onboarding",
          start: "top bottom",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
        translateX: "0%",
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".high-end-service", {
        scrollTrigger: {
          trigger: ".high-end-service",
          start: "top bottom",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
        translateX: "0%",
        visibility: "visible",
        opacity: 1,
      });
    }, context);

    return () => ctx.revert();
  }, []);

  return (
    <section className="care" ref={context}>
      <div className="care-image">
        <img
          src={people}
          className="care-image-people"
          alt="Photo by Rebrand Cities: https://www.pexels.com/photo/man-and-woman-smiling-inside-building-1367269/"
        />
      </div>
      <div className="care-text">
        <div className="care-text-story">
          <h2>We care about you and your money</h2>
          <p>
            Digital banking is a growing community working towards changing the
            way individuals think & act about problems related to money. Managed
            by the current generation.
          </p>

          <div className="no-risk">
            <div
              className="care-title-card"
              style={{
                "border-top": toggle1 ? "3px solid #131c2b" : "none",
                "border-right": toggle1 ? "3px solid #131c2b" : "none",
                "border-left": toggle1 ? "3px solid #131c2b" : "none",
                "border-radius": toggle1 ? "25px 25px 0px 0px" : "25px",
              }}
              onClick={() => {
                setToggle1((prev) => {
                  return !prev;
                });
                setToggle2(false);
                setToggle3(false);
              }}
            >
              <span>
                <img src={risk} />
                <h4>No risk</h4>
              </span>
            </div>
            <div
              className="care-text-card"
              style={{
                height: toggle1 ? "125px" : "0px",
                border: toggle1 ? "3px solid #131c2b" : "none",
              }}
            >
              <p>
                Digital banking manages assets with a combined worth over one
                billion euros. This allows us to grow your wealth without taking
                any risks.
              </p>
            </div>
          </div>

          <div className="simple-onboarding">
            <div
              className="care-title-card"
              style={{
                "border-top": toggle2 ? "3px solid #131c2b" : "none",
                "border-right": toggle2 ? "3px solid #131c2b" : "none",
                "border-left": toggle2 ? "3px solid #131c2b" : "none",
                "border-radius": toggle2 ? "25px 25px 0px 0px" : "25px",
              }}
              onClick={() => {
                setToggle1(false);
                setToggle2((prev) => {
                  return !prev;
                });
                setToggle3(false);
              }}
            >
              <span>
                <img src={onboarding} />
                <h4>Simple onboarding</h4>
              </span>
            </div>
            <div
              className="care-text-card"
              style={{
                height: toggle2 ? "125px" : "0px",
                border: toggle2 ? "3px solid #131c2b" : "none",
              }}
            >
              <p>
                We have a curated process to make your transfer to our services
                as smooth as possible.
              </p>
            </div>
          </div>

          <div className="high-end-service">
            <div
              className="care-title-card"
              style={{
                "border-top": toggle3 ? "3px solid #131c2b" : "none",
                "border-right": toggle3 ? "3px solid #131c2b" : "none",
                "border-left": toggle3 ? "3px solid #131c2b" : "none",
                "border-radius": toggle3 ? "25px 25px 0px 0px" : "25px",
              }}
              onClick={() => {
                setToggle1(false);
                setToggle2(false);
                setToggle3((prev) => {
                  return !prev;
                });
              }}
            >
              <span>
                <img src={highend} />
                <h4>High-end service</h4>
              </span>
            </div>
            <div
              className="care-text-card"
              style={{
                height: toggle3 ? "125px" : "0px",
                border: toggle3 ? "3px solid #131c2b" : "none",
              }}
            >
              <p>
                Our employees provide a high end service, which means that
                whether you account for 1% or 50% of our combined assets, you
                will feel like a prince(ss).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Care;
