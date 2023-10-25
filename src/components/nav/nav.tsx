import { useLayoutEffect, useRef, useState } from "preact/hooks";
import { Power1, gsap } from "gsap";

import "./nav.css";

import logo from "../../assets/logo.svg";
import logodark from "../../assets/logo-dark.svg";
import search from "../../assets/search.svg";
import searchdark from "../../assets/search-dark.svg";
import language from "../../assets/language.svg";
import languagedark from "../../assets/language-dark.svg";
import light from "../../assets/light.svg";
import dark from "../../assets/dark.svg";

function Nav() {
  const context = useRef(null);
  const nav = useRef(null);

  const [check, setChecked] = useState(
    JSON.parse(localStorage.getItem("selectedTheme"))
  );

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    setChecked(true);
    localStorage.setItem("selectedTheme", JSON.stringify(true));
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    setChecked(false);
    localStorage.setItem("selectedTheme", JSON.stringify(false));
  };

  if (JSON.parse(localStorage.getItem("selectedTheme")) === true) {
    setDarkMode();
  } else {
    setLightMode();
  }

  const toggleTheme = (bool: boolean) => {
    if (!bool) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // or refs
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.add(() => {}, "+=4");
      tl.fromTo(nav.current, { y: "-200%" }, { y: "0" });
    }, context);

    return () => ctx.revert();
  }, []);

  const pageTransition = () => {
    let ctx = gsap.context(() => {
      // or refs
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.to(".transition", { height: "100vh", ease: Power1.easeIn });
      // navigate(`/service`);
    }, context);

    return () => ctx.revert();
  };

  return (
    <div ref={context}>
      <nav ref={nav}>
        <div>
          {check ? (
            <img src={logodark} className="logo" />
          ) : (
            <img src={logo} className="logo" />
          )}
          <ul>
            <a onClick={() => pageTransition()}>Home</a>
            <a>Service</a>
            <a>Buy</a>
            <a>Support</a>
          </ul>
        </div>
        <div>
          <ul>
            <span>
              {check ? <img src={searchdark} /> : <img src={search} />}
              <input placeholder="Search"></input>
            </span>
            {check ? <img src={languagedark} /> : <img src={language} />}
            <a className="toggle" onClick={() => toggleTheme(check)}>
              {check ? <img src={light} /> : <img src={dark} />}
            </a>

            <button>
              <a href="https://herewecode.io/" target="_blank">
                Made by Max
              </a>
            </button>
          </ul>
        </div>
      </nav>
      <div className="transition" />
    </div>
  );
}

export default Nav;
