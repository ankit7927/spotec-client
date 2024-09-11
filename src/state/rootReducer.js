import { combineReducers } from "@reduxjs/toolkit";
import songReducer from "./song/songSlice";

export default combineReducers({
	song: songReducer,
});
