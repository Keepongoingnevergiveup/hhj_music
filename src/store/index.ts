import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux'
import { getIn } from 'immutable'
import { ICategoryState } from '../views/discover/c-views/songs/store/songs'

import counterReducer from './modules/counter'
import recommendReducer from '../views/discover/c-views/recommend/store/recommend'
import playerReducer from '../views/player/store/player'
import songsReducer from '../views/discover/c-views/songs/store/songs'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer,
    songs: songsReducer
  }
})

// const state = store.getState()
// type StateType = typeof state

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch


// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState & { getIn: (args: string[]) =>any}> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual


export default store
