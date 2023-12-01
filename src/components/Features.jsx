import React from "react";

const Features = () => {
  return (
    <section id="about">
      <div className="divider"></div>
      <div className="row row-1">
        <div className="container">
          <h5 className="about__h5">
            <span className="features">Features</span>
          </h5>
          <h2 className="about__h2">
            Movie Data from <span className="teal-gradient about-h2">OMDb API</span>
          </h2>
          <p className="about__p">
            Unlock easy accessibility to movie data with the simple search of a
            movie title
          </p>
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            className="button__design"
          >
            OMDb API
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
