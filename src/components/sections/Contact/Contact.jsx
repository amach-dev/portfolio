import Container from '../../ui/Container/Container';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { contactMethods } from '../../../data/portfolioData';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './Contact.module.css';

const icons = {
  mail: <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  github: <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" fill="currentColor" />,
  instagram: <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.6-1.9a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  whatsapp: <path d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.65-1.22A9 9 0 1 0 12 3Zm4.8 12.3c-.2.55-1.15 1.07-1.6 1.13-.4.06-.9.09-1.46-.09-.34-.1-.77-.25-1.33-.49-2.34-1.01-3.87-3.36-3.99-3.51-.12-.16-.95-1.26-.95-2.4s.6-1.7.82-1.93c.2-.23.44-.29.6-.29h.42c.14 0 .32-.02.5.38.2.44.66 1.53.72 1.64.06.12.1.25.02.4-.08.16-.12.25-.24.39-.12.14-.25.31-.36.42-.12.12-.24.25-.1.5.13.26.6 1 1.3 1.62.9.79 1.65 1.05 1.9 1.16.24.12.4.1.54-.06.15-.16.6-.71.77-.95.16-.24.32-.2.53-.12.22.08 1.4.66 1.63.78.24.12.4.18.46.28.06.1.06.56-.14 1.11Z" fill="currentColor" />,
  facebook: <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88V15.47h-2.54v-3.47h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 3.47h-2.34V21.9C18.34 21.12 22 17 22 12z" fill="currentColor" />,
  tiktok: <path d="M12 2v6.5a4.5 4.5 0 1 0 4.5 4.5h3A8 8 0 1 1 12 2z" fill="currentColor" />,
};

/** Contact methods section — direct links to email, socials, etc. */
export default function Contact() {
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something reliable together"
          description="Have a role, a project, or just a question about the stack? Reach out directly."
        />

        <div ref={cardsRef} className={`${styles.methodsGrid} ${cardsVisible ? styles.visible : ''}`}>
          {contactMethods.map((method, i) => (
            <a
              key={method.id}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.methodCard}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={styles.methodIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">{icons[method.icon]}</svg>
              </span>
              <span className={styles.methodText}>
                <span className={styles.methodLabel}>{method.label}</span>
                <span className={styles.methodValue}>{method.value}</span>
              </span>
              <span className={styles.methodArrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}