import { createSlice } from "@reduxjs/toolkit";
import { getSongs } from "./songReducer";

const initialState = {
    state: "idle",
    error: null,
    currentSong: null,
    rows: [],
    offset: null,
    page: null,
    limit: null,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSongs.pending, (state) => {
                state.songs = "loading";
            })
            .addCase(getSongs.rejected, (state, action) => {
                state.status = "idle";
                state.error = action.error.message;
            })
            .addCase(getSongs.fulfilled, (state, action) => {
                state.status = "idle";
                const data = action.payload.data;
                state.rows = data.rows;
                state.limit = data.limit;
                state.offset = data.offset;
                state.page = data.page;
            });
    },
});

export const { changeSong, clearCurrentSong } = songSlice.actions;
export default songSlice.reducer;
