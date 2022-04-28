import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { isItDefaultImg } from './helpers';

/**
 * @readonly
 */

export const DEFAULT_IMAGE = /(rcom-default|reuters-default)/g;

export const LIMIT_MESSAGE =
  'You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.';

export const pages = [
  { route: '/', name: 'Indonesia' },
  { route: '/programming', name: 'Programming' },
  { route: '/covid', name: 'Covid-19' },
  { route: '/saved', name: 'Saved' },
];

export const iconlists = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/hacktiv8id/',
    icon: <FaFacebook />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/hacktiv8id/',
    icon: <FaInstagram />,
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/hacktiv8id',
    icon: <FaTwitter />,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/c/hacktiv8',
    icon: <FaYoutube />,
  },
];
export const footerlists = [
  {
    header: 'Kategori',
    lists: [
      'Edukasi',
      'Teknologi',
      'Entertainment',
      'Sport',
      'SepakBola',
      'Otomotif',
    ],
  },
  {
    header: 'Jaringan Media',
    lists: ['CNN Indonesia', 'CNBC Indonesia', 'Insertlive', 'Female Daily'],
  },
  {
    header: 'Informasi',
    lists: [
      'Redaksi',
      'Media Siber',
      'Karir',
      'Media Partner',
      'Info Iklan',
      'Disclaimer',
    ],
  },
];

// For styling purposes (Tailwind classname utilities)
// khusus untuk komponen NewsItem yang dibentuk dalam object

export const articleStyle = {
  aside: 'flex group',
  search: 'flex h-32 shadow-md md:h-40 lg:h-auto group',
  headlines: 'w-full group',
  default: 'w-full md:w-auto last:hidden lg:w-56 lg:last:block group',
};
export const div1Style = {
  aside: 'w-3/6 mb-0.5 relative ',
  search: 'w-9/12 lg:w-5/12 h-32 md:h-40 lg:h-44 mb-0.5 relative ',
  headlines: 'relative',
  default: 'h-44 lg:h-32 mb-0.5 relative ',
};
export const div2Style = {
  aside: 'w-full mb-0.5 relative ',
  search: 'overflow-hidden w-full h-32 md:h-40 lg:h-44 mb-0.5 relative ',
  headlines: 'relative',
  default: 'overflow-hidden h-44 lg:h-32 mb-0.5 relative ',
};
export const dlStyle = {
  aside: 'flex flex-col w-3/6 pl-3 ',
  search: 'flex flex-col w-3/12 pl-0 md:h-40 lg:w-full ',
  headlines: 'relative w-11/12 p-5 mx-auto -mt-10 bg-white shadow-md ',
  default: '',
};
export const justifyFixed = {
  aside: ' justify-between ',
  search: ' justify-center w-full pl-4 h-32 lg:h-44 bg-text-light lg:pl-10',
  default: '',
};

// Sama seperti diatas didalam object, namun sedikit berbeda
// karena membutuhkan kondisi khusus.
export const faSearchStyle = {
  style: (type) => {
    const size = type === 'headlines' ? 'text-4xl' : 'text-xl';
    return `absolute ${size} text-white transform opacity-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition duration-300 ease-in-out group-hover:opacity-100`;
  },
};
export const dtStyle = {
  style: (type) => {
    const style = type === 'search' ? 'text-md lg:text-xl' : 'text-sm';
    return `font-medium ${style} group-hover:text-black transition duration-300 ease-in-out text-gray-800 focus:outline-none focus:underline focus:text-yellow-500`;
  },
  default: '',
};
export const imgStyle = (url) =>
  isItDefaultImg(url)
    ? 'border-2 border-primary-light object-cover w-full h-full transition duration-300 ease-in-out group-hover:brightness-50 filter'
    : 'w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-50 filter';
