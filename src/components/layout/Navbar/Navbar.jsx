import { useState } from 'react';
import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import { navLinks, personalInfo,name } from '../../../data/portfolioData';
import { useActiveSection } from '../../../hooks/useActiveSection';
import styles from './Navbar.module.css';

/**
 * Sticky navbar: transparent at the top of the page, gains a blurred
 * background once scrolled. Highlights the active section and includes
 * an animated mobile menu.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ids = navLinks.map((l) => l.id);
  const { activeId, isScrolled } = useActiveSection(ids);

  function handleLinkClick(id) {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <Container className={styles.inner}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
        >
          <span className={styles.logoBracket}>{'<'}</span>
          {name}
          <span className={styles.logoBracket}>{'/>'}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.navLink} ${activeId === link.id ? styles.active : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                >
                  {link.label}
                  <span className={styles.underline} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.navActions}>
          <Button href="#contact" size="sm" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}>
            Let's Talk
          </Button>
        </div>

        <button
          type="button"
          className={`${styles.menuToggle} ${isOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </Container>

      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Mobile"
        aria-hidden={!isOpen}
      >
        <ul>
          {navLinks.map((link, i) => (
            <li key={link.id} style={{ transitionDelay: `${i * 40}ms` }}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? styles.mobileActive : ''}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
