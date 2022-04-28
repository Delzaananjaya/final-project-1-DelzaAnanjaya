import { Error, Loading, NewsItem, NewsLists } from '../components';
import { useNewsContext } from '../context/newsContext';

function SpecialPages() {
  const [state] = useNewsContext();
  const { news, isLoading, query } = state;

  if (isLoading) return <Loading />;
  else if (news.length === 0) return <Error />;

  return (
    <main className='w-full min-h-full p-10 bg-white lg:p-12'>
      <h2 className='heading-2'>{query} NEWS</h2>
      <span className='heading-border-2' />
      <NewsLists type='search' className='w-full mt-10 lg:mt-0 lg:p-20'>
        {news.map((item) => (
          <NewsItem key={item.url} {...item} length={58} type='search' />
        ))}
      </NewsLists>
    </main>
  );
}

export default SpecialPages;
