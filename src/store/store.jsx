import { configureStore } from '@reduxjs/toolkit'
import { MovieHubSlice } from './MovieHubSlice'
import MovieHubReducer from './MovieHubSlice'

export const store = configureStore({
  reducer: {
    movieHubData: MovieHubReducer
  },
})
