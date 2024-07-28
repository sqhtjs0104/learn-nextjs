import { ICategory } from "../../(Home)/page";
import Book, { IBook } from "../../../components/Book";
import styles from '../../../styles/list.module.css';

export const metadata = {
  title: "Detail"
}

const URL = "https://books-api.nomadcoders.workers.dev/list?name=";

const getCategoryDetail = async (name: string) => {
  return await (await fetch(`${URL}${name}`)).json();
}

interface ICategoryDetail extends ICategory {
  bestsellers_date: '2013-04-27',
  published_date: '2013-05-12',
  published_date_description: 'latest',
  next_published_date: '',
  previous_published_date: '2013-05-05',
  normal_list_ends_at: 0,
  books: [],
}

export default async function List({
  params: { id },
}: {
  params: { id: string }
}) {
  const categoryName = decodeURIComponent(id);
  const detail = await getCategoryDetail(id);

  if (detail.status !== 'OK') {
    return <h1>Error</h1>;
  }

  const categoryDetailResults: ICategoryDetail = detail.results;

  return <section className={styles.wrapper}>
    <h2>{categoryDetailResults.display_name}</h2>
    <ul className={styles.list}>
    {
      categoryDetailResults.books.map((book: IBook) => (
        <Book key={book.primary_isbn10} data={book} />
      ))
    }
    </ul>
  </section>
}