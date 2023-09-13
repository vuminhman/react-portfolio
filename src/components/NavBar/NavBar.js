import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaYoutube, FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './NavBar.scss';

const NavBar = () => {
  const { state, dispatch } = useTheme();
  const { theme } = state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);  // <-- Add state for modal

  // Toggle theme function
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  // Toggle Modal function
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    // State to manage navbar visibility
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    function handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(currentScrollTop < lastScrollTop || currentScrollTop <= 0);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (<>
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Toggle Button for Modal */}
        {isMobile && <button onClick={toggleModal}><FaBars size={24} /></button>}

        {/* Social Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Page Links */}
        <div className="page-links space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/experience" className="hover:text-gray-400">Experience</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
        <Link to="/education" className="hover:text-gray-400">Education</Link>
        <Link to="/certifications" className="hover:text-gray-400">Certifications</Link>
        <Link to="/testimonials" className="hover:text-gray-400">Testimonials</Link>
        </div>

        {/* Download Buttons */}
        <div className="download-buttons">
          <button className="">
            Download CV
          </button>
          <button className="">
            Download Portfolio
          </button>
        {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="">
            {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </div>
      </div>
    </nav>
{/* Modal */}
{isModalOpen && (
  <div className="modal">
    <button onClick={toggleModal}>Close</button>

    {/* Social Links */}
    <div className="social-links">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={24} />
      </a>
    </div>

    {/* Page Links */}
    <div className="page-links space-x-4">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/experience" className="hover:text-gray-400">Experience</Link>
      <Link to="/projects" className="hover:text-gray-400">Projects</Link>
      <Link to="/education" className="hover:text-gray-400">Education</Link>
      <Link to="/certifications" className="hover:text-gray-400">Certifications</Link>
      <Link to="/testimonials" className="hover:text-gray-400">Testimonials</Link>
    </div>

    {/* Download Buttons */}
    <div className="download-buttons">
      <button className="">
        Download CV
      </button>
      <button className="">
        Download Portfolio
      </button>
    </div>

    {/* Theme Toggle Button */}
    <button onClick={toggleTheme} className="">
      {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  </div>
)}

    </>
  );
};

export default NavBar;
