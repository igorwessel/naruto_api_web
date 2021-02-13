import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NarutoAPI</title>
      </Head>

      <main className={styles.main}>
        <img src="/naruto_api_logo.png" alt="NarutoAPI" />
        <nav>
          <ul className={styles.navbar}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
          </ul>
        </nav>
        <div></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by igor wessel da silva
        </a>
      </footer>
    </div>
  );
}
