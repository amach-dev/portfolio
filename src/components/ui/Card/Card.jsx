import styles from './Card.module.css';

/**
 * Base glass card used across Skills, Projects, Certificates, etc.
 * `hoverLift` adds a lift + glow interaction; `gradientBorder` adds an animated gradient edge.
 */
export default function Card({
  children,
  className = '',
  hoverLift = true,
  gradientBorder = false,
  as: Tag = 'div',
  ...rest
}) {
  const classes = [
    styles.card,
    hoverLift ? styles.hoverLift : '',
    gradientBorder ? styles.gradientBorder : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...rest}>
      {gradientBorder && <span className={styles.borderGlow} aria-hidden="true" />}
      <div className={styles.content}>{children}</div>
    </Tag>
  );
}
