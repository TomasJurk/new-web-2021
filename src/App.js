import React, { useState } from 'react';
import styles from './App.module.css';

import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Hobbies from './components/Hobbies/Hobbies';
import Footer from './components/Footer/Footer';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const position = e.target.scrollTop;
    setScrollPosition(position);
  }
  
  const backOnTop = (e) => {
    const mainElement = document.getElementById('scrollableElement');
    setScrollPosition(0);
    mainElement.scrollTop = 0;
  }
  
  return (
    <div className={styles.App}>
      <header></header>
      <main id="scrollableElement" className={styles.Main} onScroll={handleScroll}>
        <Navigation />
        <About />
        <Projects />
        <div className={styles.SpaceObject} />
        <Hobbies />
        <Footer />
        {scrollPosition > 0 ? <div className={styles.ButtonUp} onClick={backOnTop} /> : null}
      </main>
    </div>
  );
};

export default App;
