import { useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Experience from './components/sections/Experience/Experience';
import Achievements from './components/sections/Achievements/Achievements';
import Certificates from './components/sections/Certificates/Certificates';
import GitHubSection from './components/sections/GitHubSection/GitHubSection';
import Contact from './components/sections/Contact/Contact';
import Loader from './components/ui/Loader/Loader';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';
import CustomCursor from './components/ui/CustomCursor/CustomCursor';
import styles from './App.module.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <CustomCursor />
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
