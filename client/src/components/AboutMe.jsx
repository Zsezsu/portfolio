import React from "react";
import profilePicture from "../assets/prof_pic.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <figure>
        <img src={profilePicture} alt='profile' className='profile-picture' />
      </figure>
      <article>
        <h2>About Me</h2>
        <section className='bubbles'>
          <figure className='bubble blue'>Honesty</figure>
          <figure className='bubble green'>Accuracy</figure>
          <figure className='bubble'>Growth Mindset</figure>
          <figure className='bubble'>Self-awareness</figure>
          <figure className='bubble'>Environmental awareness</figure>
          <figure className='bubble'>Progression</figure>
          <figure className='bubble'>Perseverance</figure>
        </section>
      </article>
    </>
  );
}

export default AboutMe;
