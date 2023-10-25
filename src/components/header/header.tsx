import { useLayoutEffect, useRef } from "preact/hooks";
import { Power1, gsap } from "gsap";

import "./header.css";

import profile1 from "../../assets/profile1.jpeg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import ribbonimg from "../../assets/ribbon.svg";
import git from "../../assets/git.svg";

function Header() {
  const context = useRef(null);
  const banking = useRef(null);
  const easy = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const ctactions = useRef(null);
  const hand = useRef(null);
  const ribbon = useRef(null);
  const gitRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.add(() => {}, "+=1");
      tl.to(banking.current, { visibility: "visible", opacity: 1 });
      tl.to(easy.current, { visibility: "visible", opacity: 1 });
      tl.add("text");
      tl.to(text1.current, { visibility: "visible", opacity: 1 }, "text");
      tl.to(text2.current, { visibility: "visible", opacity: 1 }, "text");
      tl.to(text3.current, { visibility: "visible", opacity: 1 }, "text");
      tl.to(text3.current, { visibility: "visible", opacity: 1 }, "text");
      tl.add("ctactions");
      tl.fromTo(text4.current, { y: "100%" }, { y: "0%" }, "ctactions");
      tl.to(text4.current, { visibility: "visible", opacity: 1 }, "ctactions");
      tl.fromTo(ctactions.current, { y: "100%" }, { y: "0%" }, "ctactions");
      tl.to(
        ctactions.current,
        { visibility: "visible", opacity: 1, ease: Power1.easeIn },
        "ctactions"
      );
      tl.fromTo(ribbon.current, { y: "100%" }, { y: "0%" }, "ctactions");
      tl.to(
        ribbon.current,
        {
          visibility: "visible",
          opacity: 1,
          ease: Power1.easeIn,
        },
        "ctactions"
      );
      tl.fromTo(hand.current, { y: "100%" }, { y: "0%" }, "ctactions");
      tl.to(
        hand.current,
        {
          visibility: "visible",
          opacity: 1,
          ease: Power1.easeIn,
        },
        "ctactions"
      );
      tl.add(() => {}, "+=2");
      tl.to(gitRef.current, {
        visibility: "visible",
        opacity: 1,
        ease: Power1.easeIn,
      });
    }, context);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={context}>
      <header>
        <div className="cta-text">
          <h1>
            <span>
              <div className="bold" ref={banking}>
                Banking
              </div>
              <div className="text" ref={text1}>
                Made
              </div>
            </span>
            <span className="text" ref={text2}>
              Simple, Savings
            </span>
            <span>
              <div className="text" ref={text3}>
                Made
              </div>
              <div className="bold circle" ref={easy}>
                Easy
              </div>
            </span>
          </h1>
          <p className="text" ref={text4}>
            Experience hassle-free banking card management and transactions with
            our platform with our user-friendly interface.
          </p>
          <div className="cta-actions" ref={ctactions}>
            <div className="cta-actions-button">
              <svg>
                <rect
                  class="cls-3"
                  x="0"
                  y="0"
                  width="157"
                  height="65"
                  rx="32.5"
                  ry="32.5"
                />
                <circle class="cls-3" cx="208.6" cy="32.5" r="32.5" />
                <path
                  class="cls-3"
                  d="m183.18,52.8c-16.36-19.75-33.28,0-33.28,0V12.25s16.92,19.75,33.28,0v40.54Z"
                />
                <path
                  class="cls-2"
                  d="m213.49,28.16l-14.39,14.39-2.36-2.36,14.39-14.39h-13.21s0-3.3,0-3.3h18.88v18.88h-3.3v-13.21Z"
                />
                <text class="cls-4" transform="translate(16.43 36.89)">
                  <tspan x="8" y="0">
                    Get early access
                  </tspan>
                </text>
              </svg>
            </div>
            <div className="cta-actions-users">
              <div className="cta-actions-users-profiles">
                <img src={profile1} className="cta-actions-users-profile" />
                <img src={profile2} className="cta-actions-users-profile" />
                <img src={profile3} className="cta-actions-users-profile" />
              </div>
              <div className="cta-actions-users-stats">
                <h4>1.2M+</h4>
                <label>Active Users across the world</label>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-imagery">
          <div className="cta-imagery-image" ref={hand} />
          <img src={ribbonimg} className="cta-imagery-image1" ref={ribbon} />
        </div>
      </header>
      <div className="git-container">
        <img src={git} className="git" ref={gitRef} />
      </div>
    </div>
  );
}

export default Header;
