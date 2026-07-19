import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

import {name} from "../../../data/portfolioData"
/**
 * Full-screen preloader shown briefly on first mount.
 * Purely presentational; auto-hides via onDone after a short delay.
 */
export default function Loader({ onDone }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      const cleanup = setTimeout(() => onDone && onDone(), 500);
      return () => clearTimeout(cleanup);
    }, 1100);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`${styles.loader} ${hidden ? styles.hidden : ''}`} role="status" aria-live="polite">
      <div className={styles.mark}>
        <span className={styles.bracket}>{'<'}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.bracket}>{'/>'}</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.barFill} />
      </div>
      <span className={styles.srOnly}>Loading portfolio</span>
    </div>
  );
}
