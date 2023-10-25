import { useLayoutEffect, useRef } from "preact/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./images.css";

import writing from "../../assets/writing.jpg";
import paper from "../../assets/paper.jpg";
import money from "../../assets/money.jpg";
import stocks from "../../assets/stocks.jpg";
import banking from "../../assets/banking.jpg";

function Images() {
  gsap.registerPlugin(ScrollTrigger);
  const context = useRef(null);

  useLayoutEffect(function () {
    let ctx = gsap.context(() => {
      gsap.to(".images", {
        scrollTrigger: {
          trigger: ".images",
          start: "-100% center",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
        translateX: "-100%",
      });
    }, context);

    return () => ctx.revert();
  }, []);

  return (
    <section id="images" ref={context}>
      <div className="images">
        <div className="images-slider">
          <img src={writing} />
          <img src={paper} />
          <img src={money} />
          <img src={stocks} />
          <img src={banking} />
          <img src={writing} />
        </div>
      </div>
    </section>
  );
}

export default Images;
