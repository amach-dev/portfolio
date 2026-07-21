import { useEffect, useLayoutEffect, useState } from 'react';
import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import { personalInfo } from '../../../data/portfolioData';
import { useTypingEffect } from '../../../hooks/useTypingEffect';
import styles from './Hero.module.css';


export default function Hero() {
  const typed = useTypingEffect(personalInfo.titles, { typingSpeed: 70, deletingSpeed: 35, pause: 1600 });
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const t = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(t);
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={styles.bgGradient} aria-hidden="true" />
      
      <Container className={styles.content}>
        <div className={`${styles.textBlock} ${mounted ? styles.mounted : ''}`}>
          <span className={styles.eyebrow}>
            <span className={styles.pulseDot} aria-hidden="true" />
            Available for new projects
          </span>

          <h1 className={styles.heading}>
            Hi, I&apos;m <span className={styles.name}>{personalInfo.name}</span>
          </h1>

          <p className={styles.typedLine}>
            <span className={styles.typedText}>{typed}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </p>

          <p className={styles.intro}>{personalInfo.tagline}</p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" onClick={() => scrollTo('projects')} icon="→">
              View Projects
            </Button>
            <Button variant="secondary" size="lg" href={personalInfo.resumeUrl} icon="↓">
              View CV
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollTo('contact')}>
              Contact Me
            </Button>
          </div>
        </div>

        <div className={`${styles.terminal} ${mounted ? styles.mounted : ''}`} aria-hidden="true">
          <div className={styles.terminalHeader}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
            <span className={styles.terminalTitle}>UserController.java</span>
          </div>
          <pre className={styles.terminalBody}>
<span className={styles.tKeyword}>@RestController</span>{'\n'}
<span className={styles.tKeyword}>@RequestMapping</span>(<span className={styles.tString}>"/api/users"</span>){'\n'}
<span className={styles.tKeyword}>public class</span> <span className={styles.tClass}>UserController</span> {'{'}{'\n'}
{'\n'}
{'  '}<span className={styles.tKeyword}>@PreAuthorize</span>(<span className={styles.tString}>"hasRole('ADMIN')"</span>){'\n'}
{'  '}<span className={styles.tKeyword}>@GetMapping</span>{'\n'}
{'  '}<span className={styles.tKeyword}>public</span> ResponseEntity{'<'}Page{'<'}UserDto{'>>'} getAll(Pageable pageable) {'{'}{'\n'}
{'    '}<span className={styles.tKeyword}>return</span> ResponseEntity.ok(service.findAll(pageable));{'\n'}
{'  '}{'}'}{'\n'}
{'}'}
          </pre>
        </div>
      </Container>

      <button
        type="button"
        className={styles.scrollIndicator}
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollMouse}>
          <span className={styles.scrollWheel} />
        </span>
      </button>
    </section>
  );
}
