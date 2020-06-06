import React, { ReactNode, useReducer } from 'react';
import Store, { initialState } from './context/context';
import reducer from './reducer/reducer';

type ProviderProps = {
  children: ReactNode;
};

export default ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
