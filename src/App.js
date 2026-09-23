import styles from './App.module.scss';
import Header from './Header';
import HeroSection1 from './HeroSection1';

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeroSection1 />
      </main>
    </>
  );
}
