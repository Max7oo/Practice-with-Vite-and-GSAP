import { useLayoutEffect, useRef } from "preact/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./contact.css";

import chat from "../../assets/chat.svg";
import pin from "../../assets/pin.svg";
import call from "../../assets/call.svg";

function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  const context = useRef(null);

  useLayoutEffect(function () {
    let ctx = gsap.context(() => {
      gsap.to(".contact", {
        scrollTrigger: {
          trigger: ".contact",
          start: "bottom bottom",
          end: "bottom 75%",
          scrub: true,
          // markers: true,
        },
        width: "80%",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingTop: "50px",
        paddingBottom: "50px",
      });
      gsap.to(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 90%",
          end: "25% 75%",
          scrub: true,
          // markers: true,
        },
        translateY: "0%",
        visibility: "visible",
        opacity: 1,
      });
      // gsap.to(".contact-form-title", {
      //   scrollTrigger: {
      //     trigger: ".contact-form-title",
      //     start: "top 85%",
      //     end: "bottom 75%",
      //     scrub: true,
      //     // markers: true,
      //   },
      //   translateY: "0%",
      //   visibility: "visible",
      //   opacity: 1,
      // });
      // gsap.to(".contact-form-text", {
      //   scrollTrigger: {
      //     trigger: ".contact-form-text",
      //     start: "top 75%",
      //     end: "bottom 65%",
      //     scrub: true,
      //     // markers: true,
      //   },
      //   translateY: "0%",
      //   visibility: "visible",
      //   opacity: 1,
      // });
      // gsap.to(".contact-form-input", {
      //   scrollTrigger: {
      //     trigger: ".contact-form-input",
      //     start: "top 95%",
      //     end: "bottom 85%",
      //     scrub: true,
      //     // markers: true,
      //   },
      //   translateY: "0%",
      //   visibility: "visible",
      //   opacity: 1,
      // });
      gsap.to(".chat-to-us", {
        scrollTrigger: {
          trigger: ".chat-to-us",
          start: "top 75%",
          end: "bottom 65%",
          scrub: true,
          // markers: true,
        },
        translateY: "0%",
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".visit-us", {
        scrollTrigger: {
          trigger: ".visit-us",
          start: "top 75%",
          end: "bottom 65%",
          scrub: true,
          // markers: true,
        },
        translateY: "0%",
        visibility: "visible",
        opacity: 1,
      });
      gsap.to(".call-us", {
        scrollTrigger: {
          trigger: ".call-us",
          start: "top 75%",
          end: "bottom 65%",
          scrub: true,
          // markers: true,
        },
        translateY: "0%",
        visibility: "visible",
        opacity: 1,
      });
    }, context);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={context}>
      <div className="contact">
        <div className="contact-info">
          <div className="chat-to-us">
            <img src={chat} />
            <div>
              <h4>Chat to us</h4>
              <p>Our friendly team is here to help.</p>
              <a>get@scammed.com</a>
            </div>
          </div>
          <div className="visit-us">
            <img src={pin} />
            <div>
              <h4>Visit us</h4>
              <p>Come say hello at our office HQ.</p>
              <a>100 Smith Street</a>
            </div>
          </div>
          <div className="call-us">
            <img src={call} />
            <div>
              <h4>Call us</h4>
              <p>Mon-Fri from 8am to 5pm.</p>
              <a>+1 (555) 000-0000</a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <h2 className="contact-form-title">
              Want to give us your money? We've got the experience. Let's team
              up
            </h2>
            <p className="contact-form-text">
              Tell us more about yourself and what you've got in mind.
            </p>
            <div className="contact-form-input">
              <input type="text" name="name" placeholder="Your name" />
              <input type="text" name="email" placeholder="your@email.com" />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={4}
                placeholder="Tell us a little about your idea..."
              />
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div className="contact-form-img" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
