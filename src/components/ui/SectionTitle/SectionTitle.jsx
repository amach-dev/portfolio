import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './SectionTitle.module.css';

/**
 * Consistent section heading: small mono eyebrow, large title, optional description.
 * Reveals with a fade/slide-up when scrolled into view.
 */
export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${styles[align]} ${isVisible ? styles.visible : ''}`}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
