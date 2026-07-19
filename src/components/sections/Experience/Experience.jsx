import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { experience } from '../../../data/portfolioData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './Experience.module.css';

/** Vertical timeline of hands-on engineering experience areas. */
export default function Experience() {
  return (
    <section id="experience" className={styles.section} aria-label="Experience">
      <Container>
        <SectionTitle
          eyebrow="Experience"
          title="Where I've spent my engineering hours"
          description="Hands-on work across the backend lifecycle, from the first endpoint to the deployed container."
        />

        <ol className={styles.timeline}>
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <li
      ref={ref}
      className={`${styles.item} ${isEven ? styles.itemLeft : styles.itemRight} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
    >
      <div className={styles.node} aria-hidden="true" />
      <div className={styles.card}>
        <span className={styles.period}>{item.period}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
      </div>
    </li>
  );
}
