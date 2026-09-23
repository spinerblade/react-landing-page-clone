import styles from './LinkButton.module.scss';

export default function LinkButton({ href, dark, children }) {
  return (
    <a href={href} className={dark ? styles.dark : styles.light}>
      {children}
    </a>
  );
}
