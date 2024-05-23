import './Footer.css';

export default function Footer() {
  const openLink = () => {
    window.open('https://github.com/your-repo-link', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>Created by Allen Yoo aka FrostyyAllen ❄️</p>
        </div>
        <div className="footer-right">
          <button onClick={openLink} className="footer-button">
            View Source Code 
            <i className="fa-brands fa-github"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
