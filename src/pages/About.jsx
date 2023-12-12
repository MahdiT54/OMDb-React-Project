import React from "react";
import Undrawabout from "../assets/undraw_online_video_re_fou2.svg";
import Undrawinterface from "../assets/undraw_usability_testing_re_uu1g.svg";
import Undrawwebdevices from "../assets/undraw_web_devices_re_m8sc (1).svg";

const About = () => {
  return (
    <section id="about__page" className="about__page">
      <div className="row about__row">
        <div className="container about__container">
          <div className="about__header--left">
            <h1 className="about__header--left-h1">
              What is OMDb<span className="teal-gradient">Go</span>?
            </h1>
            <p className="about__header--left-p">
              We harness the power of the OMDb API to provide you with
              up-to-date and accurate information about a vast array of movies
              and shows. From cast details to ratings, we've got it all covered.
              Our commitment to accuracy ensures that the information you find
              on OMDbGo is reliable and reflective of the latest updates in the
              entertainment industry.
            </p>
          </div>
          <figure className="about__header--right">
            <img
              src={Undrawabout}
              className="about__header--right-img"
              alt=""
            />
          </figure>
          <div className="divider"></div>
        </div>
      </div>
      <div className="row interface__row">
        <div className="container interface__container">
          <div className="interface__left">
            <h1 className="interface__header--left-h1">
              User-Friendly <span className="teal-gradient">Interface</span>
            </h1>
            <p className="interface__header--left-p">
              Our clean and user-friendly interface ensures a smooth and
              enjoyable browsing experience. Navigate through the world of
              entertainment effortlessly, with a focus on simplicity and
              functionality.
            </p>
          </div>
          <figure className="interface__right">
            <img
              src={Undrawinterface}
              className="interface__right--img"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row responsive__row">
        <div className="container responsive__container">
          <div className="responsive__left">
            <h1 className="responsive__header--left-h1">
              <span className="teal-gradient">Responsive</span> Design
            </h1>
            <p className="responsive__header--left-p">
              Enjoy OMDbGo on any device – desktop, tablet, or mobile. Our
              website is optimized for responsiveness, providing you with a
              seamless experience regardless of your preferred device.
            </p>
          </div>
          <figure className="responsive__right">
            <img
              src={Undrawwebdevices}
              className="response__right--img"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
