import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import PostJob from './PostJob';
import SearchJob from './SearchJob';
import ViewResume from './ViewResume';

function Admin() {
  const homeRef = useRef(null);
  const postJobRef = useRef(null);
  const searchJobRef = useRef(null);
  const viewResumeRef = useRef(null);
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

  const scrollToPostJob = () => {
    postJobRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSearchJob = () => {
    searchJobRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToViewResume = () => {
    viewResumeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className={visible ? "navbar" : "navbar hidden"}>
        <div>
          <h1>🔍</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="#" onClick={scrollToHome}>Home</Link></li>
          <li><Link to="#" onClick={scrollToPostJob}>Post Job</Link></li>
          <li><Link to="#" onClick={scrollToSearchJob}>Search Job</Link></li>
          <li><Link to="#" onClick={scrollToViewResume}>View Resume</Link></li>
        </ul>
      </nav>
      <div className="content">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={postJobRef}>
          <PostJob />
        </div>
        <div ref={searchJobRef}>
          <SearchJob />
        </div>
        <div ref={viewResumeRef}>
          <ViewResume />
        </div>
      </div>
    </div>
  );
}

export default Admin;
