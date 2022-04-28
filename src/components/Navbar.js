import { Link } from 'react-router-dom';
import {
  SET_LOADING,
  SET_QUERY_SEARCH,
  TOGGLE_NAVBAR,
} from '../reducer/actions';
import { useNewsContext } from '../context/newsContext';
import { pages } from '../utils/constants';
import { Button } from '.';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [state, dispatch] = useNewsContext();
  const [isNavClosed, setIsNavClosed] = useState(true);
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);

  // For styling purposes
  const ulStyle = `mt-3 text-xl md:flex md:mt-0 md:space-x-5 lg:space-x-16 ${
    isNavClosed ? 'hidden' : 'block'
  }`;
  const navStyle = `px-12 py-5 text-white duration-200 ease-out transition-height md:flex md:items-center md:justify-between bg-gradient-to-r from-primary-dark to-primary-light ${
    isNavClosed ? 'h-22' : 'h-50'
  }`;

  // Toggle untuk berpindah halaman sekaligus memproses data fetching.
  const toggleNavbar = (page, name) => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: TOGGLE_NAVBAR, payload: page });
    dispatch({ type: SET_QUERY_SEARCH, payload: name });
  };

  // Update lebar layar yang diresize user.
  const updateDimensions = () => setScreenwidth(window.innerWidth);

  // Set up untuk memasang (event resize) dan mendeteksi screen width secara real time.
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Untuk menutup dan menghilangkan navbar toggler (hamburger icon) saat breakpoints sudah diatas sm.
  useEffect(() => {
    if (screenwidth > 425) {
      setIsNavClosed(true);
    }
  }, [screenwidth]);

  return (
    <nav className={navStyle}>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold'>IDNnews.</h1>
      </div>
      <ul className={ulStyle}>
        {pages.map(({ route, name }, index) => {
          // Mengecek state halaman untuk styling border bottom di nav list
          const isPageActive = index === state.pages && 'special-list-active';

          return (
            <li
              className={`lg:inline hfidden special-list ${isPageActive}`}
              key={index}
            >
              <Link
                to={route}
                className='px-2 py-0.5 outline-none focus:ring-4 focus:ring-yellow-400 focus:rounded-lg focus:ring-offset-4 focus:ring-offset-white'
                onClick={() => toggleNavbar(index, name)}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
