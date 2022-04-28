import { FaTrash } from 'react-icons/fa';
import { Button } from '.';

/**
 * Selain params dibawah ini, sudah dijelaskan pada file/komponen (NewsItem)
 * @param deleteNews - Function untuk menghapus sebuah berita yang diklik user.
 */
function SavedItem({
  index,
  source: { name },
  title,
  description,
  url,
  deleteNews,
}) {
  // Styling agar table listnya strip (belang)
  const isOdd = index % 2 === 0 ? 'bg-text-light' : 'bg-white';
  const trStyle = `${isOdd} hover:bg-gray-300 transition ease-in-out duration-500 hover:text-black group`;

  return (
    <tr className={trStyle}>
      <td>
        <Button
          className='my-3 ml-0 text-red-500 transition duration-500 ease-in-out rounded-lg outline-none lg:ml-4 group-hover:text-red-700 focus:ring-4 focus:ring-offset-4 focus:ring-yellow-400 group-focus:bg-yellow-400 focus:ring-offset-white'
          onClick={() => deleteNews(url)}
        >
          <FaTrash />
        </Button>
      </td>
      <td className='pl-2 text-sm lg:pl-5 lg:text-md'>
        <p className='overflow-hidden'>{name}</p>
        <a
          href={url}
          className='font-semibold outline-none hover:underline text-primary-dark focus:underline focus:text-yellow-400'
          target='_blank'
          rel='noreferrer'
          role='button'
        >
          News Page
        </a>
      </td>
      <td className='p-0 lg:pl-5 lg:pr-12'>
        <p className='pl-1 overflow-hidden text-sm lg:text-md max-h-28'>
          {title}
        </p>
      </td>
      <td className='py-8 pl-2 lg:px-5 lg:w-14'>
        <p className='overflow-hidden text-sm lg:text-md max-h-36'>
          {description}
        </p>
      </td>
    </tr>
  );
}

export default SavedItem;
