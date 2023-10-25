import { useLayoutEffect, useRef } from "preact/hooks";
import { gsap } from "gsap";

import "./benefits.css";

import arrow from "../../assets/arrow.svg";

function Benefits() {
  const context = useRef(null);
  const business = useRef(null);
  const finance = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.add(() => {}, "+=5");
      tl.add("business");
      tl.fromTo(business.current, { x: "-100%" }, { x: "0%" }, "business");
      tl.to(
        business.current,
        { visibility: "visible", opacity: 1 },
        "business"
      );
      tl.add("finance");
      tl.fromTo(finance.current, { x: "100%" }, { x: "0%" }, "finance");
      tl.to(finance.current, { visibility: "visible", opacity: 1 }, "finance");
    }, context);

    return () => ctx.revert();
  }, []);

  return (
    <div className="benefits" ref={context}>
      <div className="benefits-business" ref={business}>
        <div className="benefits-business-cta">
          <img src={arrow} className="benefits-business-cta-img" />
        </div>
        <h2>For your business</h2>
        <p>
          Experience hassle-free banking card management and transactions with
          our platform with our user-friendly interface.
        </p>
      </div>
      <div className="benefits-finance" ref={finance}>
        <div className="benefits-finance-spacer" />
        <div className="benefits-finance-text">
          <h2>The future of finance</h2>
          <p>
            Enjoy effortless card management and seamless transactions on our
            platform, thanks to our intuitive user interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
