import styles from './HeroSection1.module.scss';

export default function HeroSection1() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.headline}>
          Beautiful progress bar & countdown widgets on your Home & Lock
          Screens.
        </h1>
        <p className={styles.subtext}>
          Track and remind yourself about the important things with beautiful
          progress bar, timers and countdown widgets on all your iOS devices.
        </p>

        <div className={styles.devices}>
          <div className={styles.singleDevice}>
            <img
              src="/images/phone-symbol.png"
              alt=""
              className={styles.deviceImage}
            />
            <span>iPhone</span>
          </div>
          <div className={styles.singleDevice}>
            <img
              src="/images/ipad-symbol.png"
              alt=""
              className={styles.deviceImage}
            />
            <span>iPad</span>
          </div>
          <div className={styles.singleDevice}>
            <img
              src="/images/watch-symbol.png"
              alt=""
              className={styles.deviceImage}
            />
            <span>Watch</span>
          </div>
          <div className={styles.singleDevice}>
            <img
              src="/images/notebook-symbol.png"
              alt=""
              className={styles.deviceImage}
            />
            <span>Mac</span>
          </div>
          <div className={styles.singleDevice}>
            <img
              src="/images/android-symbol.png"
              alt=""
              className={styles.deviceImage}
            />
            <span>Android</span>
          </div>
        </div>

        <div className={styles.qrBlock}>
          <img
            className={styles.qrCode}
            src="/images/qrcode.png"
            alt="QR code to download the app"
          />
          <div className={styles.qrText}>
            <div className={styles.qrIcons}>
              <img src="/images/apple-logo.png" alt="Apple" />
              <img src="/images/android-logo.png" alt="Android" />
            </div>
            <span className={styles.qrTitle}>Get the App</span>
            <span className={styles.qrSubtitle}>Point camera</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img
          className={styles.appOfTheDay}
          src="/images/app-of-the-day.png"
          alt="Apple App of the Day"
        />
        <div className={styles.imageStack}>
          <img
            className={styles.widgetsGrid}
            src="/images/widget-background.png"
            alt="widget background"
          />
          <img
            className={styles.phoneMockup}
            src="/images/widget-on-phone.png"
            alt="widget on phone"
          />
        </div>
      </div>
    </section>
  );
}
