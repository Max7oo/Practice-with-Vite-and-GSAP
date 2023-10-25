import { useLayoutEffect, useRef, useState } from "preact/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./charts.css";
import { UserData } from "./data";
import BarChart from "./charts/barchart";
import LineChart from "./charts/linechart";

function Charts() {
  gsap.registerPlugin(ScrollTrigger);
  const context = useRef(null);

  useLayoutEffect(function () {
    let ctx = gsap.context(() => {
      gsap.to(".charts-title", {
        scrollTrigger: {
          trigger: ".charts-title",
          start: "top center",
          end: "center center",
          scrub: true,
          // markers: true,
        },
        lineHeight: 1.5,
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".line-chart", {
        scrollTrigger: {
          trigger: ".line-chart",
          start: "top center",
          end: "center center",
          scrub: true,
          // markers: true,
        },
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".charts-text", {
        scrollTrigger: {
          trigger: ".charts-text",
          start: "top center",
          end: "center center",
          scrub: true,
          // markers: true,
        },
        lineHeight: 1.5,
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".bar-chart", {
        scrollTrigger: {
          trigger: ".bar-chart",
          start: "top center",
          end: "center center",
          scrub: true,
          // markers: true,
        },
        visibility: "visible",
        opacity: 1,
      });
    }, context);

    return () => ctx.revert();
  }, []);

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Our gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#e6bf1e"],
        borderColor: "#1d6645",
        borderWidth: 3,
      },
      {
        label: "Client gain",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["#e7f1e3"],
        borderColor: "#1d6645",
        borderWidth: 3,
      },
    ],
  });
  return (
    <section ref={context}>
      <div className="charts">
        <div className="charts-title">
          <h2>Our gain</h2>
          <h2>Is a lot bigger than</h2>
          <h2>Your gain</h2>
        </div>
        <div className="charts-text">
          <p>
            We mean it. 90% of the profits made of your assets goes straight
            into our own pockets. Is it not the best business plan ever?
          </p>
        </div>
        <div className="bar-chart">
          <BarChart data={userData} />
        </div>
        <div className="line-chart">
          <LineChart data={userData} />
        </div>
      </div>
    </section>
  );
}

export default Charts;
