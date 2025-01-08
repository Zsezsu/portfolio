import React from "react";
import profilePicture from "../assets/prof_pic.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <figure>
        <img src={profilePicture} alt='profile' className='profile-picture' />
      </figure>
      <section>
        <h2>About Me</h2>
        <figure>
          <figcaption>Transparency</figcaption>
          <figcaption>Honesty</figcaption>
          <figcaption>Growth Mindset</figcaption>
          <figcaption>Self-awareness</figcaption>
          <figcaption>Environmental awareness</figcaption>
          <figcaption>Progression</figcaption>
          <figcaption>Perseverance</figcaption>
        </figure>
      </section>
    </>
  );
}

export default AboutMe;
