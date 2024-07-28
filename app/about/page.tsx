import styles from '../../styles/about.module.css';

export const metadata = {
  title: "About",
}

export default function About() {
  return <article className={styles.about}>
    <h1>About Us</h1>
    <p>Welcome to the official explorer for The Nnew York Times Best Seller list explorer.<br/>We hope you enjoy your stay!</p>
  </article>
}