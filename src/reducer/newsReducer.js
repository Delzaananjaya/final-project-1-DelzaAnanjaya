import * as TYPE from './actions';

/**
 * @property {Array<Object>} news - List berita yang didapat dari API.
 * @property {Array<Object>} saved_news - List berita yang disimpan oleh user.
 * @property {string} query - Query yang digunakan untuk menarik berita yang dicari.
 * @property {number} size - Batas ukuran berita yang diambil/fetch.
 * @property {string} message - Pesan khusus (biasanya pesan error) untuk user jika terjadi sesuatu.
 * @property {boolean} isLoading - Loading untuk menunggu proses data fetching.
 * @property {number} pages - Mengindentifikasikan sebagai halaman, dimulai dari 0:indonesia, 1:programming, dsb.
 */
export const initialState = {
  news: [],
  saved_news: [],
  query: 'indonesia',
  size: 12,
  message: '',
  isLoading: true,
  pages: 0,
};

export const news_reducer = (state, action) => {
  switch (action.type) {
    case TYPE.TOGGLE_NAVBAR:
      const isNavbarAtFirstPage = action.payload === 0;

      return {
        ...state,
        size: isNavbarAtFirstPage ? 12 : 6,
        pages: action.payload,
      };

    case TYPE.SET_QUERY_SEARCH:
      return {
        ...state,
        query: action.payload,
      };

    case TYPE.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case TYPE.GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };

    case TYPE.ADD_TO_SAVED_NEWS:
      const news = action.payload;
      const areNewsAlreadySaved = state.saved_news.some(
        (item) => item.url === news.url
      );
      const removeNews = state.saved_news.filter(
        (item) => item.url !== news.url
      );
      const updatedNews = areNewsAlreadySaved
        ? removeNews
        : [...state.saved_news, news];

      return {
        ...state,
        saved_news: updatedNews,
      };

    case TYPE.SET_SAVED_NEWS:
      return {
        ...state,
        saved_news: action.payload,
      };

    case TYPE.SET_MESSAGE:
      return {
        ...state,
        news: [],
        message: action.payload,
        isLoading: false,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
