import {useEffect} from 'react';
import { createObserver } from '../../extras/observerUtil';
import "./Skills.css";

export default function Skills() {

  useEffect(() => {
    createObserver('.skill-box', 'in-view', 0.25);
    createObserver('.animate-header', 'animate-in-view', 0.25);
    createObserver('.animate-border', 'animate-in-view', 0.25);

  }, []);

  return (
    <section id="skills">
      <div className="skills-container animate-header">
        <h1 className="skills-header">Skills</h1>
        <p className="">Here is a list of the technologies I am familiar with.</p>
        <div className="skills-border line-border animate-border"></div>
      </div>
      <div className="grid-container">
        <div className="skills-grid">
          <div className="skill-html skill-box">
            <img
              src={require("../../imgs/Skills/skill-html.png")}
              alt="skill-img"
              className="html-img skill-img"
            />
          </div>
          <div className="skill-css skill-box">
            <img 
              src={require('../../imgs/Skills/skill-css.png')}
              alt="skill-img"
              className="css-img skill-img" />
          </div>
          <div className="skill-react skill-box">
          <img 
              src={require('../../imgs/Skills/skill-react.png')}
              alt="skill-img"
              className="react-img skill-img" />
          </div>
          <div className="skill-node-js skill-box">
          <img 
              src={require('../../imgs/Skills/skill-node-js.png')}
              alt="skill-img"
              className="node-js-img skill-img" />
          </div>
          <div className="skill-python skill-box">
          <img 
              src={require('../../imgs/Skills/skill-python.webp')}
              alt="skill-img"
              className="python-img skill-img" />
          </div>
          <div className="skill-aws skill-box">
          <img 
              src={require('../../imgs/Skills/skill-aws.png')}
              alt="skill-img"
              className="aws-img skill-img" />
          </div>
          <div className="skill-excel skill-box">
          <img 
              src={require('../../imgs/Skills/skill-excel.webp')}
              alt="skill-img"
              className="excel-img skill-img" />
          </div>
          <div className="class-linux skill-box">
          <img 
              src={require('../../imgs/Skills/skill-linux.png')}
              alt="skill-img"
              className="linux-img skill-img" />
          </div>
          <div className="skill-lxc skill-box">
          <img 
              src={require('../../imgs/Skills/skill-lxc.png')}
              alt="skill-img"
              className="lxc-img skill-img" />
          </div>

        </div>
      </div>
    </section>
  );
}
