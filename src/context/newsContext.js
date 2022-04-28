import { createContext, useContext, useReducer } from 'react';

const NewsContext = createContext();
NewsContext.displayName = 'NewsContext';

export const NewsProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <NewsContext.Provider value={[globalState, dispatch]}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => useContext(NewsContext);