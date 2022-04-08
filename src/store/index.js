/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reducer';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
}
