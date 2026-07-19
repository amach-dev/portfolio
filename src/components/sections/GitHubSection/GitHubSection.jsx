import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';
import { githubStats } from '../../../data/portfolioData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './GitHubSection.module.css';

/** GitHub showcase: headline stats plus a preview of latest repositories. */
export default function GitHubSection() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  const stats = [
    { label: 'Repositories', value: githubStats.repositories },
    { label: 'Contributions', value: githubStats.contributions },
    { label: 'Followers', value: githubStats.followers },
  ];

  return (
    <section id="github" className={styles.section} aria-label="GitHub activity">
      <Container>
        <SectionTitle
          eyebrow="Open Source"
          title="What's happening on GitHub"
          description="A snapshot of recent activity — the full history lives on my profile."
        />

        <div ref={ref} className={`${styles.panel} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value.toLocaleString()}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.reposGrid}>
            {githubStats.latestProjects.map((repo) => (
              <Card key={repo.name} className={styles.repoCard} hoverLift>
                <div className={styles.repoHeader}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                  </svg>
                  <span className={styles.repoName}>{repo.name}</span>
                </div>
                <p className={styles.repoDesc}>{repo.description}</p>
                <span className={styles.repoLang}>
                  <span className={styles.langDot} />
                  {repo.language}
                </span>
              </Card>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <Button href={githubStats.profileUrl} target="_blank" variant="secondary" size="md">
              View GitHub Profile
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
