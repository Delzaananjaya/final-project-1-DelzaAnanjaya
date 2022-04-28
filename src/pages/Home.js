import React from 'react';
import { Error, Loading, NewsItem, NewsLists } from '../components';
import { useNewsContext } from '../context/newsContext';
import { splitNews } from '../utils/helpers';

function Home() {
  const [state] = useNewsContext();
  const { news, isLoading, query } = state;

  if (isLoading || news.length === 6) return <Loading />;
  else if (news.length === 0) return <Error />;

  // Membagi array menjadi 3 bagian, masing-masing untuk header, headlines dan aside.
  const mergingArray = splitNews(news);

  return (
    <main>
      <div className='p-12 bg-white'>
        <h2 className='heading-2'>{query} NEWS</h2>
        <span className='heading-border-2' />
        <h3 className='heading-3'>Berita Utama</h3>
        <span className='heading-border-3' />
        <NewsLists>
          {mergingArray[0].map((item) => (
            <NewsItem {...item} key={item.url} length={53} />
          ))}
        </NewsLists>
      </div>
      
    </main>
  );
}

export default Home;
