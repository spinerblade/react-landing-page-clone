import styles from './Header.module.scss';
import LinkButton from './LinkButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div>
          <a href="#home">
            <img
              className={styles.logo}
              src="/images/pretty-progress-logo.png"
              alt="pretty-progress-logo"
              width="140"
              height="40"
            />
          </a>
        </div>
        <div>
          <LinkButton href="#download" dark>
            Download
          </LinkButton>
          <LinkButton href="#affiliate">Become Affiliate</LinkButton>
        </div>
      </nav>
    </header>
  );
}
