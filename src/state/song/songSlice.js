import { createSlice } from "@reduxjs/toolkit";
import { homeFeed, search } from "./songReducer";

const initialState = {
	status: "idle",
	error: null,
	currentSong: null,
	tracks: [],
	lists: [],
	searchQuery: "",
};

const songSlice = createSlice({
	name: "song",
	initialState,
	reducers: {
		changeSong: (state, action) => {
			state.currentSong = null;
			state.currentSong = action.payload;
		},

		clearCurrentSong: (state) => {
			state.currentSong = null;
		},

		onQueryChange: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(homeFeed.pending, (state) => {
				state.status = "loading";
			})
			.addCase(homeFeed.rejected, (state, action) => {
				state.error = action.error.message;
				state.status = "idle";
			})
			.addCase(homeFeed.fulfilled, (state, action) => {
				const data = action.payload.data;
				state.tracks = data.tracks;
				state.lists = data.lists;
				state.status = "idle";
			});
		builder
			.addCase(search.pending, (state) => {
				state.status = "loading";
			})
			.addCase(search.rejected, (state, action) => {
				state.status = "idle";
				state.error = action.error.message;
			})
			.addCase(search.fulfilled, (state, action) => {
				const data = action.payload.data;
				state.tracks = data.tracks;
				state.lists = data.lists;
				state.status = "idle";
			});
	},
});

export const { changeSong, clearCurrentSong, onQueryChange } =
	songSlice.actions;
export default songSlice.reducer;
