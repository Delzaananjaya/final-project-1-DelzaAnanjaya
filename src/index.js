import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NewsProvider } from './context/newsContext';
import { initialState, news_reducer } from './reducer/newsReducer';

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider initialState={initialState} reducer={news_reducer}>
      <App />
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
