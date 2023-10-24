import React from "react";

const About = () => {
  return (
    <section id="about">
      <div class="divider"></div>
      <div class="row row-1">
        <div class="container">
          <h5 class="about__h5">
            <span class="teal-gradient">Features</span>
          </h5>
          <h2 class="about__h2">
            Movie Data from <span class="teal-gradient">OMDb API</span>
          </h2>
          <p class="about__p">
            Unlock easy accessibility to movie data with the simple search of a
            movie title
          </p>
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            class="button__design"
          >
            OMDb API
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
