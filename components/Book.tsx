import styles from  '../styles/book.module.css';

export interface IBook {
  rank: number,
  rank_last_week: number,
  weeks_on_list: number,
  asterisk: number,
  dagger: number,
  primary_isbn10: string,
  primary_isbn13: string,
  publisher: string,
  description: string,
  price: string,
  title: string,
  author: string,
  contributor: string,
  contributor_note: string,
  book_image: string,
  book_image_width: number,
  book_image_height: number,
  amazon_product_url: string,
  age_group: string,
  book_review_link: string,
  first_chapter_link: string,
  sunday_review_link: string,
  article_chapter_link: string,
  isbns: { isbn10: string, isbn13: string }[],
  buy_links: { name: string, url: string }[],
  book_uri: string,
}

export default function Book({
  data
}: {
  data: IBook
}) {
  return <li className={styles.book}>
    <img src={data.book_image} />
    <div className={styles.info}>
      <div>
        <h4>{data.title}</h4>
        <span>{data.author}</span>
      </div>
      {
        data.buy_links.length > 0 && <a href={data.buy_links[0].url} target='_blank'>Buy now →</a>
      }
      
    </div>
  </li>
}