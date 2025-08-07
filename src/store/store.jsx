import { configureStore } from '@reduxjs/toolkit'
import { MovieHubSlice } from './MovieHubSlice'
import MovieHubReducer from './MovieHubSlice'

export const Store = configureStore({
  reducer: {
    movieHubData: MovieHubReducer
  },
})
