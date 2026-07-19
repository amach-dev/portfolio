import Card from '../../ui/Card/Card';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './ProjectCard.module.css';

/**
 * Premium project card: placeholder cover art (CSS-generated, no images needed),
 * tech stack chips, and GitHub / live-demo actions. Lifts and glows on hover.
 */
export default function ProjectCard({ project, index = 0 }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card gradientBorder className={styles.card}>
        <div className={styles.cover} aria-hidden="true">
          <span className={styles.coverGlyph}>{'{ }'}</span>
          <div className={styles.coverGrid} />
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <ul className={styles.stack}>
            {project.stack.map((tech) => (
              <li key={tech} className={styles.techChip}>{tech}</li>
            ))}
          </ul>

          <div className={styles.actions}>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtn} ${styles.demoBtn}`}
              aria-label={`View live demo of ${project.title}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 4h6v6M20 4l-8 8M6 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
