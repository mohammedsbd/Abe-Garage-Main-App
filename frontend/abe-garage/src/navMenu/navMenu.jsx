import React, { useState, useEffect } from 'react';
import './StateNav.css'; // Importing custom styles for the navigation component

const StateNav = () => {
  // Initialize state from localStorage or default to false
  const [isNavOpen, setIsNavOpen] = useState(() => {
    const savedNavState = localStorage.getItem('navState');
    return savedNavState ? JSON.parse(savedNavState) : false;
  });

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // State for submenu toggle
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // For mobile responsiveness

  // Toggle the main navigation
  const toggleNav = () => {
    const newNavState = !isNavOpen;
    setIsNavOpen(newNavState);
    localStorage.setItem('navState', JSON.stringify(newNavState));
  };

  // Toggle submenu visibility
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="state-nav-container">
      <header className="state-nav-header">
        <button onClick={toggleNav} className="nav-toggle-btn">
          {isNavOpen ? 'Close Nav' : 'Open Nav'}
        </button>
      </header>

      {/* Main Navigation */}
      {isNavOpen && (
        <nav className={state-nav ${isMobile ? 'mobile' : ''}}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li className="submenu-item">
              <button onClick={toggleSubmenu} className="submenu-btn">
                Services {isSubmenuOpen ? '▲' : '▼'}
              </button>
              {isSubmenuOpen && (
                <ul className="submenu">
                  <li><a href="/services/web">Web Development</a></li>
                  <li><a href="/services/mobile">Mobile Development</a></li>
                  <li><a href="/services/design">UI/UX Design</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}

      <main className="main-content">
        <h1>Welcome to our site!</h1>
        <p>Click the button to toggle the navigation menu. This is a longer version of the StateNav component with a submenu and some mobile responsiveness!</p>
        <p>
          This is a simple example of building a navigation bar in React with state management using hooks. You can further enhance this by adding animations, different UI components, or dynamic routes.
        </p>
      </main>
    </div>
  );
};

export default StateNav;