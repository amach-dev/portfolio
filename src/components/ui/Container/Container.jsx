import styles from './Container.module.css';

/** Simple max-width content wrapper used across all sections. */
export default function Container({ children, className = '', as: Tag = 'div' }) {
  return <Tag className={`${styles.container} ${className}`}>{children}</Tag>;
}
