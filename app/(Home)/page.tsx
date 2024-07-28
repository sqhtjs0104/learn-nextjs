import Link from "next/link";
import styles from '../../styles/home.module.css';

export const metadata = {
  title: "Home",
}

const URL = "https://books-api.nomadcoders.workers.dev/lists";

const getCategories = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export interface ICategory {
  list_name: string,
  display_name: string,
  list_name_encoded: string,
  oldest_published_date: string,
  newest_published_date: string,
  updated: string,
}

export default async function Home() {
  const [categories] = await Promise.all([getCategories()]);
  return <div className={styles.wrapper}>
    <h1>The New York Times Best Seller Explorer</h1>
    <ul className={styles.list}>
      {
        categories?.status === 'OK' && categories.results.map((category: ICategory) => (
          <li key={category.list_name}>
            <Link key={category.list_name} href={`/list/${category.list_name_encoded}`}>{category.display_name} →</Link>
          </li>
        ))
      }
    </ul>
  </div>;
}