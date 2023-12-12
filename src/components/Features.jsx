import React from "react";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="divider"></div>
      <div className="row row__features">
        <div className="container container__features">
          <h5 className="features__h5">
            Features
          </h5>
          <h2 className="features__h2">
            Movie Data from <span className="teal-gradient features-h2">OMDb API</span>
          </h2>
          <p className="features__p">
            Unlock easy accessibility to movie data with the simple search of a
            movie title
          </p>
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            className="features__more-info"
          >
            More Info
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
