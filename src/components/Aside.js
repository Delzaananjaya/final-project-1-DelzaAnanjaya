import { NewsItem, NewsLists } from '.';

function Aside({ news }) {
  return (
    <aside className='w-full pb-24 lg:bg-white lg:px-4 md:shadow-md lg:w-5/12'>
      <h3 className='heading-3'>Berita Lainnya</h3>
      <span className='heading-border-3' />
      <NewsLists type='aside'>
        {news.map((item) => (
          <NewsItem {...item} key={item.url} length={58} type='aside' />
        ))}
      </NewsLists>
    </aside>
  );
}

export default Aside;
