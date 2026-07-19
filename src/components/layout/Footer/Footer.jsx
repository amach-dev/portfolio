import Container from '../../ui/Container/Container';
import { navLinks, personalInfo, contactMethods,name } from '../../../data/portfolioData';
import styles from './Footer.module.css';

/** Site footer: quick links, social links, and copyright. */
export default function Footer() {
  const year = new Date().getFullYear();

  function handleLinkClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a
              href="#home"
              className={styles.logo}
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              <span className={styles.logoBracket}>{'<'}</span>
              {name}
              <span className={styles.logoBracket}>{'/>'}</span>
            </a>
            <p className={styles.tagline}>{personalInfo.tagline}</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Connect</h3>
            <ul>
              {contactMethods.map((method) => (
                <li key={method.id}>
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
          <p className={styles.builtWith}>Built with React &amp; a lot of coffee.</p>
        </div>
      </Container>
    </footer>
  );
}
