import { combineReducers } from "@reduxjs/toolkit";
import songReducer from "./song/songSlice";
import userReducer from "./user/userSlice";

export default combineReducers({
	song: songReducer,
	user: userReducer,
});
