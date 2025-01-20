import React from "react";
import profilePicture from "./assets/prof_pic.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className='about-me'>
      <figure>
        <img src={profilePicture} alt='profile' className='profile-picture' />
      </figure>
      <article>
        <h2>About Me</h2>
        <section className='bubble-container'>
          <div className='bubble blue bubble-1'>Honesty</div>
          <div className='bubble green  bubble-2'>Accuracy</div>
          <div className='bubble yellow bubble-3'>Growth Mindset</div>
          <div className='bubble pink bubble-4'>Self-awareness</div>
          <div className='bubble purple bubble-5'>Environmental awareness</div>
          <div className='bubble orange bubble-6'>Progression</div>
          <div className='bubble ocean bubble-7'>Perseverance</div>
        </section>
      </article>
    </div>
  );
}

export default AboutMe;
