import { ICategory } from "../../(Home)/page";
import { IBook } from "../../../components/Book";

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

export default async function Detail({
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

  return <>
    <h2>{categoryDetailResults.display_name}</h2>
    {
      categoryDetailResults.books.map((book: IBook) => (
        <></>
      ))
    }
  </>
}