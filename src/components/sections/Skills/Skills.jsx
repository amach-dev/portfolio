import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Card from '../../ui/Card/Card';
import { skillCategories } from '../../../data/portfolioData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './Skills.module.css';

const icons = {
  server: (
    <path d="M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3 3h.01M7 7h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  layout: (
    <path d="M4 5h16v14H4V5Zm0 5h16M9 10v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  monitor: (
    <path d="M4 5h16v10H4V5Zm5 14h6M12 15v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  database: (
    <path d="M12 5c4.4 0 8 1.34 8 3s-3.6 3-8 3-8-1.34-8-3 3.6-3 8-3Zm-8 3v6c0 1.66 3.6 3 8 3s8-1.34 8-3V8m-16 3v6c0 1.66 3.6 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  tool: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
};

/** Category grid of skill cards, each with animated fill bars revealed on scroll. */
export default function Skills() {
  return (
    <section id="skills" className={styles.section} aria-label="Skills">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Tools I use to build reliable software"
          description="A backend-first toolkit, rounded out with the frontend and desktop skills needed to ship a complete product."
        />

        <div className={styles.grid}>
          {skillCategories.map((category, catIndex) => (
            <SkillCard key={category.id} category={category} index={catIndex} icon={icons[category.icon]} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function SkillCard({ category, index, icon }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${styles.cardWrapper} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Card gradientBorder className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.iconWrap}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
          </span>
          <h3 className={styles.cardTitle}>{category.title}</h3>
        </div>

        <ul className={styles.skillList}>
          {category.skills.map((skill) => (
            <li key={skill.name} className={styles.skillItem}>
              <div className={styles.skillLabelRow}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                />
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
