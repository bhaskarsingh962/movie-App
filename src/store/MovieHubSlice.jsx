import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    bannerData : [],
    imageURL : ""
}

export const MovieHubSlice = createSlice({
    name: 'MovieHub',
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload
        },
        setImageURL: (state, action) => {
            state.imageURL = action.payload;
        }
    }
})

export const {setBannerData, setImageURL} = MovieHubSlice.actions

export default MovieHubSlice.reducer;