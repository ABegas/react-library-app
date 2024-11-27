import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: "",
    author: "",
    onlyFavorite: false,
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // Back new object in cqase of traditional approach
            //return {...state, title: action.payload}

            // or State can be mutable with a help of Immer library using Slice approach
            state.title = action.payload
        },
        setAuthorFilter: (state, action) => {
            // Back new object in cqase of traditional approach
            //return {...state, author: action.payload}

            // or State can be mutable with a help of Immer library using Slice approach
            state.author = action.payload
        },
        setOnlyFavorite: (state) => {
            state.onlyFavorite = !state.onlyFavorite
        },
        resetFilters: () => {
            return initialState
        },
    },
})

export const {
    setTitleFilter,
    setAuthorFilter,
    resetFilters,
    setOnlyFavorite,
} = filterSlice.actions
export const selectFilterTitle = (state) => state.filter.title
export const selectFilterAuthor = (state) => state.filter.author
export const selectFilterFavorite = (state) => state.filter.onlyFavorite
export default filterSlice.reducer
