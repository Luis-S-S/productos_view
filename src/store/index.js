/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { useReducer, createContext } from 'react';
import { reducer, initialState } from './reducer';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
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
