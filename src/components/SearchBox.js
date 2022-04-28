import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { useNewsContext } from '../context/newsContext';
import { Button } from '.';
import {
  SET_LOADING,
  SET_QUERY_SEARCH,
  TOGGLE_NAVBAR,
} from '../reducer/actions';

function SearchBox() {
  const [state, dispatch] = useNewsContext();
  const { pages } = state;
  const [text, setText] = useState('');
  const searchInput = useRef(null);
  let history = useHistory();

  // Update query agar mentrigger data fetching
  const setQuery = (event) => {
    // Mengecek event user, jika menekan enter atau klik maka kondisi true
    if (event.key === 'Enter' || event['type'] === 'click') {
      dispatch({ type: SET_LOADING, payload: true });
      history.push(`/search/${text}`);
      dispatch({ type: SET_QUERY_SEARCH, payload: text });
      dispatch({ type: TOGGLE_NAVBAR, payload: -1 }); // value -1, agar tidak ada border bottom di navbar pada route search
    }
  };

  // Digunakan agar tiap berpindah halaman, user langsung difokuskan kepada input search box.
  useEffect(() => {
    searchInput.current.focus();
  }, [pages]);

  return (
    <section className='relative py-5 lg:py-5 bg-none'>
      <div className='relative w-10/12 h-auto mx-auto'>
        <input
          className='min-w-full px-5 py-2 rounded-full shadow-md outline-none md:px-8 md:py-4 focus:ring-4 focus:ring-offset-4 focus:ring-yellow-400 focus:ring-offset-text-light'
          type='text'
          placeholder='Search News'
          ref={searchInput}
          value={text}
          onKeyPress={setQuery}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          className='absolute md:right-5 right-3 -top-0.5 md:top-1.5'
          onClick={setQuery}
          ariaLabel='Search'
          tabIndex='-1'
        >
          <FaSearch className='text-md md:text-4xl text-primary-light' />
        </Button>
      </div>
    </section>
  );
}

export default SearchBox;
