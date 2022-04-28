import { FaSadTear } from 'react-icons/fa';
import { useNewsContext } from '../context/newsContext';

function Error() {
  const [state] = useNewsContext();

  return (
    <section className='w-full px-10 mt-16 mb-16 text-center md:mt-0'>
      <FaSadTear
        className='w-full text-9xl text-primary-dark'
        role='presentation'
      />
      <h2 className='p-5 text-xl font-medium'>{state.message}</h2>
    </section>
  );
}

export default Error;
