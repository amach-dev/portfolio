import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { achievements } from '../../../data/portfolioData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useCounter } from '../../../hooks/useCounter';
import styles from './Achievements.module.css';

/** Stat grid; counters animate up from zero once scrolled into view. */
export default function Achievements() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.4 });

  return (
    <section id="achievements" className={styles.section} aria-label="Achievements">
      <Container>
        <SectionTitle
          eyebrow="Achievements"
          title="Numbers behind the work"
        />

        <div ref={ref} className={styles.grid}>
          {achievements.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} start={isVisible} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatCard({ stat, start, index }) {
  const value = useCounter(stat.value, start, 1600);

  return (
    <div className={styles.stat} style={{ transitionDelay: `${index * 100}ms` }}>
      <span className={styles.value}>
        {value}
        <span className={styles.suffix}>{stat.suffix}</span>
      </span>
      <span className={styles.label}>{stat.label}</span>
    </div>
  );
}
