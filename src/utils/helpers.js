import { DEFAULT_IMAGE } from './constants';

/**
 * @readonly
 */

// Memotong string (judul, deskripsi, dll) sampai batas params length
export const truncatingText = (text, length) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

// Untuk menghandle gambar yang hilang yang terdapat pada API
export const isItDefaultImg = (url) => (url ? url.match(DEFAULT_IMAGE) : false);

// Membagi array menjadi 3 bagian masing-masing (5, 5, 2) untuk halaman home (indonesia)
export const splitNews = (news) => {
  const newsPerSections = 5;
  const numberOfSections = Math.ceil(news.length / newsPerSections);

  const newArray = Array.from({ length: numberOfSections }, (_, index) => {
    const start = index * newsPerSections;
    return news.slice(start, start + newsPerSections);
  });

  return newArray;
};
