import { configureStore } from '@reduxjs/toolkit';
import countReducer from './modules/counter';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
type getStateFn = typeof store.getState;
export type IRootSateType = ReturnType<getStateFn>;
export const useAppSelector: TypedUseSelectorHook<IRootSateType> = useSelector;
export default store;
