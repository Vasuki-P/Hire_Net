import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import ApplyJob from './ApplyJob';
import SearchJob from './SearchJob';
import Footer from './Footer';  // Import Footer component

function Admin() {
  const homeRef = useRef(null);
  const applyJobRef = useRef(null);
  const searchJobRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToApplyJob = () => {
    applyJobRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSearchJob = () => {
    searchJobRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className={visible ? "navbar" : "navbar hidden"}>
        <div>
          <h1>🔍</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="#" onClick={scrollToHome}>Home</Link></li>
          <li><Link to="#" onClick={scrollToSearchJob}>Search Job</Link></li>
          <li><Link to="#" onClick={scrollToApplyJob}>Apply Job</Link></li>
        </ul>
      </nav>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={searchJobRef}>
        <SearchJob />
      </div>
      <div ref={applyJobRef}>
        <ApplyJob />
      </div>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
}

export default Admin;
