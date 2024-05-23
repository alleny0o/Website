import {useEffect} from 'react';
import {createObserver} from '../../extras/observerUtil';
import './Projects.css'

export default function Projects() {
  useEffect(() => {
    createObserver('.skill-box', 'in-view', 0.25);
    createObserver('.animate-header', 'animate-in-view', 0.25);
    createObserver('.animate-border', 'animate-in-view', 0.25);
    createObserver('.project-info-container', 'animate-in-view', 0.53); // Set threshold to 0.25
    createObserver('.project-preview', 'animate-in-view', 0.3); // Set threshold to 0.25

    const youtubeButton = document.getElementById('youtube-button');
    if (youtubeButton) {
      youtubeButton.addEventListener('click', function() {
        window.open('https://www.youtube.com/watch?v=qZMmtCCEzSw', '_blank');
      });
    }
  }, []);
  return (
    <section id="projects">
        <div className="project-heading-container">
          <h1 className="project-main-title animate-header">Projects</h1>
          <p className="project-main-subheading animate-header">
            Stay tuned for many more exciting projects coming soon!
          </p>
          <div className="project-border line-border animate-border"></div>
        </div>
        <div className="project-container">
          <div className="tech-container">
            <div className="project-info-container">
              <h1 className="project-title">StudyGrapher
</h1>
              <p className="description">
              Visualize and prioritize your exam study plan with an interactive graph of commonly tested topics, study times, and descriptions, all from the upload of a PDF.
              </p>
              <div className="technologies-container">
                <div className="technologies">
                  <p>Node.js</p>
                  <p>REST APIs</p>
                </div>
                <button id="youtube-button" className="video-preview-btn">Video Preview of Project</button>
              </div>
            </div>
            <div className="project-preview">
              <img
                className="thumbnail"
                src={require("../../imgs/Projects/studygrapher.png")}
                alt="Back to Bach Project Thumbnail"
              />
            </div>
          </div>
        </div>
    </section>
  )
}