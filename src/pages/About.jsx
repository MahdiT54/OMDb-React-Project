import React from "react";
import Undrawabout from "../assets/undraw_online_video_re_fou2.svg";
import Undrawinterface from "../assets/undraw_usability_testing_re_uu1g.svg"


const About = () => {
  return (
    <section id="about__page" className="up__padding">
      <div className="row about-row">
        <div className="about__header--left">
          <h1 className="about__header--left-h1">What is OMDbGo?</h1>
          <p className="about__header--left-p">
            We harness the power of the OMDb API to provide you with up-to-date
            and accurate information about a vast array of movies and shows.
            From cast details to ratings, we've got it all covered. Our
            commitment to accuracy ensures that the information you find on
            OMDbGo is reliable and reflective of the latest updates in the
            entertainment industry.
          </p>
        </div>
        <figure className="about__header--right">
          <img src={Undrawabout} className="about__header--right-img" alt="" />
        </figure>
      </div>
      <div className="row interface-row">
        <div className="interface__left">
          <h1 className="about__header--left-h1">User-Friendly Interface</h1>
          <p className="about__header--left-p">
            Our clean and user-friendly interface ensures a smooth and enjoyable
            browsing experience. Navigate through the world of entertainment
            effortlessly, with a focus on simplicity and functionality.
          </p>
        </div>
        <figure className="interface__right">
          <img src={Undrawinterface} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default About;

{
  /* <h1>Responsive Design</h1>
<p>
  Enjoy OMDbGo on any device – desktop, tablet, or mobile. Our website
  is optimized for responsiveness, providing you with a seamless
  experience regardless of your preferred device.
</p> */
}
