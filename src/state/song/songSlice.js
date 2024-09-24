import { createSlice } from "@reduxjs/toolkit";
import { homeFeed, search } from "./songReducer";

const initialState = {
	status: "idle",
	error: null,
	currentSong: null,
	tracks: [],
	lists: [],
	searchQuery: "",
	currentTrackIndex: null,
	currentPlaylist: null,
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

		onPlayListStart: (state, action) => {
			state.currentPlaylist = action.payload;
			const track =
				state.currentPlaylist.tracks[
					state.currentTrackIndex ? state.currentTrackIndex : 0
				];

			state.currentTrackIndex = 0;
			state.currentSong = null;
			state.currentSong = track;
		},

		onPlayListStop: (state, action) => {
			state.currentPlaylist = null;
			state.currentSong = null;
			state.currentTrackIndex = 0;
		},

		onPlaylistNextTrack: (state) => {
			state.currentTrackIndex += 1;
			state.currentSong = state.currentPlaylist[state.currentTrackIndex];
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

export const {
	changeSong,
	clearCurrentSong,
	onQueryChange,
	onPlayListStart,
	onPlayListStop,
	onPlaylistNextTrack,
} = songSlice.actions;
export default songSlice.reducer;
