import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { aboutContent } from '../../../data/portfolioData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './About.module.css';

/** Biography section with focus-area tags and a decorative code-frame accent. */
export default function About() {
  const [textRef, textVisible] = useScrollReveal();
  const [asideRef, asideVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className={styles.section} aria-label="About me">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title={aboutContent.heading}
          align="left"
        />

        <div className={styles.grid}>
          <div
            ref={textRef}
            className={`${styles.textCol} ${textVisible ? styles.visible : ''}`}
          >
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}

            <div className={styles.tags}>
              {aboutContent.focusAreas.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div
            ref={asideRef}
            className={`${styles.asideCol} ${asideVisible ? styles.visible : ''}`}
          >
            <div className={styles.badge}>
              <span className={styles.badgeLine} />
              <div className={styles.badgeRow}>
                <span className={styles.badgeLabel}>Focus</span>
                <span className={styles.badgeValue}>Backend Architecture</span>
              </div>
              <div className={styles.badgeRow}>
                <span className={styles.badgeLabel}>Stack</span>
                <span className={styles.badgeValue}>Java · Spring · React · Tauri</span>
              </div>
              <div className={styles.badgeRow}>
                <span className={styles.badgeLabel}>Ships with</span>
                <span className={styles.badgeValue}>Docker &amp; CI-ready configs</span>
              </div>
              <div className={styles.badgeRow}>
                <span className={styles.badgeLabel}>Believes in</span>
                <span className={styles.badgeValue}>Clean code over clever code</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
