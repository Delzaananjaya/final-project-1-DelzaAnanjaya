import {
  SET_LOADING,
  SET_QUERY_SEARCH,
  TOGGLE_NAVBAR,
} from '../reducer/actions';
import { useNewsContext } from '../context/newsContext';
import { footerlists, iconlists } from '../utils/constants';
import { Link } from 'react-router-dom';
import { Button } from '.';

function Footer() {
  const [state, dispatch] = useNewsContext();
  const { isLoading } = state;

  // For styling purpose
  const footerStyle = `flex w-full p-16 text-lg text-white md:flex-col lg:justify-center lg:flex-row md:items-center bg-primary-dark ${
    isLoading ? 'hidden' : 'block'
  }`;

  // Pergi ke berita dan route sesuai list yang diklik pengguna
  const applyQuery = (list) => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_QUERY_SEARCH, payload: list });
    dispatch({ type: TOGGLE_NAVBAR, payload: -1 });
  };

  return (
    <footer className={footerStyle}>
      <div className='self-center text-center'>
        <h3 className='mb-4 text-xl font-extrabold'>IDNnews.</h3>
        <div className='flex justify-between text-3xl w-52'>
          {iconlists.map(({ name, link, icon }) => (
            <Button
              key={link}
              className='p-1 text-4xl transition-colors duration-300 ease-in-out rounded-full hover:text-gray-300 focus:text-gray-300 focus:ring-4 focus:ring-yellow-400 focus:outline-none'
              onClick={() => window.open(link, '_blank')}
              ariaLabel={name}
            >
              {icon}
            </Button>
          ))}
        </div>
      </div>
      <section className='flex justify-around w-full lg:w-9/12 mt-14 lg:mt-0'>
        {footerlists.map(({ header, lists }) => (
          <div className='hidden md:block' key={header}>
            <h4 className='text-xl font-extrabold'>{header}</h4>
            <ul>
              {lists.map((query) => (
                <li key={query}>
                  <Link
                    to={`/search/${query}`}
                    className='transition-colors duration-300 ease-in-out hover:text-gray-300 focus:outline-none focus:underline focus:text-yellow-400'
                    onClick={() => applyQuery(query)}
                  >
                    {query}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </footer>
  );
}

export default Footer;
