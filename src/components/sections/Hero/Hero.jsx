import { useEffect, useState } from 'react';
import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import { personalInfo,name } from '../../../data/portfolioData';
import { useTypingEffect } from '../../../hooks/useTypingEffect';
import styles from './Hero.module.css';

/**
 * Full-viewport hero. The signature visual is an animated "service graph" —
 * nodes and connecting lines standing in for the APIs/services the copy
 * talks about — layered with a floating terminal snippet and soft shapes.
 * No personal photo is used, per the brief.
 */
export default function Hero() {
  const typed = useTypingEffect(personalInfo.titles, { typingSpeed: 70, deletingSpeed: 35, pause: 1600 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={styles.bgGradient} aria-hidden="true" />
      <ServiceGraph />
      <FloatingShapes />

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

/** Animated SVG graph of connected nodes — a visual metaphor for services/APIs. */
function ServiceGraph() {
  const nodes = [
    { x: 78, y: 20 }, { x: 30, y: 42 }, { x: 90, y: 55 },
    { x: 55, y: 70 }, { x: 15, y: 80 }, { x: 70, y: 92 },
  ];
  const edges = [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [3, 5]];

  return (
    <svg className={styles.graph} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          className={styles.graphEdge}
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y} r={i === 3 ? 2.6 : 1.6}
          className={styles.graphNode}
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
  );
}

/** Decorative floating gradient shapes, purely CSS-animated. */
function FloatingShapes() {
  return (
    <div className={styles.shapes} aria-hidden="true">
      <span className={`${styles.shape} ${styles.shape1}`} />
      <span className={`${styles.shape} ${styles.shape2}`} />
      <span className={`${styles.shape} ${styles.shape3}`} />
      <span className={`${styles.shape} ${styles.shape4}`} />
    </div>
  );
}
