import React from 'react';
import {img} from './images.jpg'
import "./about.css"

function about() {
  return (
    <div className="about-container">
      <section className="company-overview">
        <h1>About Software Company</h1>
        <p>
          Software Company is a leading IT solutions provider specializing in creating innovative solutions that help businesses thrive in the digital age. With over [X years] of experience, our team of experts is dedicated to delivering cutting-edge technology and services.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses through technology, providing scalable and sustainable solutions that drive growth and efficiency.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {/* Example team member, repeat for each member */}
          <div className="team-member">
            <img src="{img}" alt="Team Member Name" />
            <h3>Team Member Name</h3>
            <p>Position/Role</p>
          </div>
          
        </div>
      </section>

      <section className="achievements">
        <h2>Our Achievements</h2>
        <ul>
          <li>Launching a successful product or service.</li>
          <li>Hiring new employees who are passionate about software development.</li>
          <li>Implementing a new technology that significantly improves our products or services.</li>
          <li>Reaching a significant number of users or customers.</li>
          <li>Securing funding or investment.</li>
          <li>Developing innovative technology or solutions.</li>
          <li>Expanding into new markets or territories.</li>
          <li>Winning industry awards or recognition.</li>
          <li>Building a talented and dedicated team.</li>
          <li>Establishing partnerships or collaborations with other companies.</li>
        </ul>
      </section>
    </div>
  );
}

export default about;
