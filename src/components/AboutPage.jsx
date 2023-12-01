import React from 'react';
// import './AboutPage.css'; // Import your CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header">
        <h1 className="app-name">About [Your App Name]</h1>
      </header>

      <section className="vision-section">
        <h2>Vision</h2>
        <p>
          At [Your App Name], we envision a world where [brief description of the problem your app solves] is a thing of the past.
          Our mission is to empower individuals and businesses with cutting-edge technology that simplifies and enhances [the domain your app operates in].
        </p>
      </section>

      <section className="innovation-section">
        <h2>Innovation at the Core</h2>
        <p>
          [Your App Name] stands at the forefront of innovation, harnessing the power of React to deliver a seamless and intuitive user experience.
          Our team of dedicated experts is committed to pushing the boundaries of what's possible in the digital landscape.
        </p>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Intuitive User Interface:</strong> Experience a user-friendly interface designed with precision and elegance, ensuring a delightful user journey.
          </li>
          <li>
            <strong>Advanced Functionality:</strong> [Highlight a key feature or functionality that sets your app apart from the rest].
          </li>
          <li>
            <strong>Data Security:</strong> Rest easy knowing that your data is handled with the utmost care. We employ state-of-the-art security measures to protect your information.
          </li>
        </ul>
      </section>

      <section className="commitment-section">
        <h2>Our Commitment</h2>
        <div className="commitment-list">
          <div>
            <h3>Excellence</h3>
            <p>We are committed to excellence in every aspect of [Your App Name]. From design to functionality, our commitment to quality sets us apart.</p>
          </div>
          <div>
            <h3>Customer Satisfaction</h3>
            <p>Your satisfaction is our top priority. We value your feedback and continually strive to enhance our services to meet and exceed your expectations.</p>
          </div>
          <div>
            <h3>Continuous Improvement</h3>
            <p>In the ever-evolving landscape of technology, we stay ahead of the curve. Regular updates and improvements ensure that [Your App Name] remains at the forefront of industry standards.</p>
          </div>
        </div>
      </section>

      <section className="join-us-section">
        <h2>Join Us on the Journey</h2>
        <p>
          Embark on a journey with [Your App Name] and witness the future of [the domain your app operates in].
          Whether you are a seasoned professional or a newcomer to [your industry], our platform welcomes you with open arms.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or want to learn more about [Your App Name]? Contact our dedicated support team at [your email address] or [your contact number]. We're here to assist you.</p>
      </section>
    </div>
  );
};

export default AboutPage;
