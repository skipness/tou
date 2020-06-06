import { createContext } from 'react';

export type AppState = {
  imagePreview: { selectedIndex: number };
};

export const initialState: AppState = {
  imagePreview: { selectedIndex: 0 },
};

export default createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });
