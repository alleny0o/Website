import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Home.css'

export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ['Just a college student exploring the world of Web Development, Cybersecurity, and Data Science.'],
    loop: false,
    typeSpeed: 60,
    deleteSpeed: 70,
    delaySpeed: 10000000000,
  });

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-parent">
          <h3>Hi, I'm Allen 👋🏼</h3>
          <p>
            {typeEffect}
            <Cursor cursorStyle="|" />
          </p>
          <div className="home-icon-container">
            <a className="icon-a-tag linkedin-icon-a-tag" href="https://www.linkedin.com/in/allenyoo/" target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a className="icon-a-tag" href="https://github.com/alleny0o" target="_blank" rel="noreferrer">
                  <i className="fa fa-github"></i>
                </a>
                <a className="icon-a-tag" href="https://m.facebook.com/61558052236382/" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a className="icon-a-tag" href="https://www.instagram.com/gatekeepallen" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
          </div>
        </div>
        <div className="home-img-container">
          <div className="official-img"></div>
        </div>
      </div>
    </section>
  )
}