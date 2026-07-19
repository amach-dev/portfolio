import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Card from '../../ui/Card/Card';
import { certificates } from '../../../data/portfolioData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './Certificates.module.css';

const icons = {
  award: <path d="M12 2l2.2 4.8 5.2.6-3.8 3.6.9 5.2L12 13.7 7.5 16.2l.9-5.2L4.6 7.4l5.2-.6L12 2ZM8 16l-1.5 5L12 19l5.5 2L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />,
  code: <path d="m9 8-4 4 4 4m6-8 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  shield: <path d="M12 3 5 6v6c0 4.4 3 8.2 7 9 4-.8 7-4.6 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
  layers: <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Zm-8 8 8 4.5 8-4.5m-16 4 8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
  box: <path d="M21 8 12 3 3 8m18 0-9 5m9-5v9l-9 5m0-9L3 8m9 5v9M3 8v9l9 5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
  database: <path d="M12 5c4.4 0 8 1.34 8 3s-3.6 3-8 3-8-1.34-8-3 3.6-3 8-3Zm-8 3v6c0 1.66 3.6 3 8 3s8-1.34 8-3V8m-16 3v6c0 1.66 3.6 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
};

/** Grid of certification cards with icon badges and hover lift. */
export default function Certificates() {
  return (
    <section id="certificates" className={styles.section} aria-label="Certificates">
      <Container>
        <SectionTitle
          eyebrow="Certifications"
          title="Formal training behind the practice"
        />

        <div className={styles.grid}>
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function CertCard({ cert, index }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Card className={styles.card}>
        <span className={styles.icon}>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">{icons[cert.icon]}</svg>
        </span>
        <h3 className={styles.title}>{cert.title}</h3>
        <p className={styles.issuer}>{cert.issuer}</p>
        <span className={styles.year}>{cert.year}</span>
      </Card>
    </div>
  );
}
