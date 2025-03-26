import { configureStore } from '@reduxjs/toolkit';
import countReducer from './modules/counter';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
type getStateFn = typeof store.getState;
type IRootSateType = ReturnType<getStateFn>;
type DispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootSateType> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export default store;
