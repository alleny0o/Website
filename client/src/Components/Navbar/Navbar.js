import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  const hideNavbar = () => {
    navRef.current.classList.remove('responsive_nav');
  }

  return (
    <header className="nav">
      <h3>Allen.dev</h3>
      <nav ref={navRef}>
        <a href="#home" onClick={hideNavbar}>Home</a>
        <a href="#about-me" onClick={hideNavbar}>About Me</a>
        <a href="#skills" onClick={hideNavbar}>Skills</a>
        <a href="#projects" onClick={hideNavbar}>Projects</a>
        <a className="last-a-tag" href="#contact-me" onClick={hideNavbar}>Contact Me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
