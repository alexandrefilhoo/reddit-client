import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
import searchReducer from '../features/search/searchSlice';
import uiReducer from '../features/ui/uiSlice'

const rootReducer = combineReducers({
    posts: postsReducer,
    search: searchReducer,
    ui: uiReducer
})

export default rootReducer;