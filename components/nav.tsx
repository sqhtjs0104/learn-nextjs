import Link from "next/link";
import styles from "../styles/nav.module.css"

export default function Nav() {
  return<nav className={styles.nav}>
    <h1><Link href="/">Home</Link></h1>
    <h2><Link href="/about">About</Link></h2>
  </nav>
}