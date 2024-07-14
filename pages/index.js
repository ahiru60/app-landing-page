// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My App Landing Page</title>
        <meta name="description" content="Welcome to My App!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">My App!</a>
        </h1>

        <p className={styles.description}>
          Get to know  <a href="#">Game of thrones Characters</a> 
        </p>
        <a href="#" className={styles.button}>
          <p>Downlad now</p>
        </a>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>About Us &rarr;</h2>
            <p className={styles.para}>Find in-depth information about our app and team.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Features &rarr;</h2>
            <p className={styles.para}>Discover the amazing features of our app.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Pricing &rarr;</h2>
            <p className={styles.para}>Choose the best plan that suits your needs.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p className={styles.para}>Get in touch with us for more information.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
