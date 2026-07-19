import { useRef } from 'react';
import styles from './Button.module.css';

/**
 * Reusable button/link with a variant system and a JS-driven ripple effect.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  icon = null,
  className = '',
  ariaLabel,
  target,
}) {
  const btnRef = useRef(null);

  function handleRipple(e) {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.className = styles.ripple;
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  function handleClick(e) {
    handleRipple(e);
    if (onClick) onClick(e);
  }

  const classes = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ');

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        className={classes}
        onClick={handleClick}
        aria-label={ariaLabel}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      className={classes}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
