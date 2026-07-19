import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../../data/portfolioData';
import styles from './Projects.module.css';

/** Grid of featured projects, each rendered with the reusable ProjectCard. */
export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-label="Projects">
      <Container>
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects built to handle real traffic"
          description="A mix of web platforms and a desktop application, each focused on secure auth, clean APIs, and maintainable structure."
        />

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
