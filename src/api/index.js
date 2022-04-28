// Ubah value dibawah menjadi -1, jika api-nya sudah melewati batas hariannya.
const API_KEY = (apiSelection) =>
  apiSelection === 0
    ? process.env.REACT_APP_API_KEY
    : process.env.REACT_APP_API_KEY_2;

export const CONFIG = {
  PARAMS: (size) => `?pageSize=${size}&apiKey=${API_KEY(0)}&q=`,
  BASE_URL: 'https://newsapi.org/v2/',
  ENDPOINT: 'everything',
};
