import { createObserver } from '../../extras/observerUtil';
import {useEffect} from 'react';
import './AboutMe.css'

export default function AboutMe() {

  useEffect(() => {
    createObserver('.animate-header', 'animate-in-view', 0.5);
    createObserver('.animate-border', 'animate-in-view', 0.5); 
    createObserver('.about-me-iribe', 'animate-in-view', 0.001); 
    createObserver('.p-one', 'animate-in-view', 0.25); 
    createObserver('.p-two', 'animate-in-view', 0.25); 
    createObserver('.p-three', 'animate-in-view', 0.25); 
    createObserver('.p-four', 'animate-in-view', 0.25);
  }, []);

  return (
    <section id="about-me">
      <div className="about-me-container">
        <h1 className="about-me-header animate-header">About Me</h1>
        <div className="about-me-border line-border animate-border"></div>
        </div>
        <div className="about-me-box-container">
          <div className="about-me-box">
            <div className="about-me-iribe"></div>
            <div className="about-me-description">
            <p className="p-one about-me-description-p">Hi, my name is Allen Yoo, and I'm a rising sophomore at the ✨ <b>University of Maryland</b> ✨ studying Computer Science.</p>
            <p className="p-two about-me-description-p">In a different chapter of my life, I was a cellist 🎻 who won numerous international competitions. This experience taught me discipline, perseverance, and the joy of creative expression.</p>
            <p className="p-three about-me-description-p">Outside of academics, I enjoy playing basketball 🏀!</p>
            <p className="p-four about-me-description-p">Please click on the icons above (like LinkedIn) to learn more about me. Have a nice day!</p>
            </div>
          </div>
        </div>
    </section>
  )
}