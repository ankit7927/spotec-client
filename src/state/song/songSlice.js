import { createSlice } from "@reduxjs/toolkit";
import { paginate, search } from "./songReducer";

const initialState = {
	status: "idle",
	error: null,
	currentSong: null,
	rows: [],
	offset: null,
	page: null,
	limit: null,
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
			.addCase(paginate.pending, (state) => {
				state.status = "loading";
			})
			.addCase(paginate.rejected, (state, action) => {
				state.status = "idle";
				state.error = action.error.message;
			})
			.addCase(paginate.fulfilled, (state, action) => {
				state.status = "idle";
				const data = action.payload.data;
				state.rows = data.rows;
				state.limit = data.limit;
				state.offset = data.offset;
				state.page = data.page;
			})
			.addCase(search.pending, (state) => {
				state.status = "loading";
			})
			.addCase(search.rejected, (state, action) => {
				state.status = "idle";
				state.error = action.error.message;
			})
			.addCase(search.fulfilled, (state, action) => {
				state.status = "idle";
				const data = action.payload.data;
				state.rows = data.rows;
				state.limit = data.limit;
				state.offset = data.offset;
				state.page = data.page;
			});
	},
});

export const { changeSong, clearCurrentSong, onQueryChange } = songSlice.actions;
export default songSlice.reducer;
