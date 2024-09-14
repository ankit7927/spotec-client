import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getSongs = createAsyncThunk("song/allSongs", async (data) => {
	return await axios.get("http://localhost:5000/song/song");
});

const paginate = createAsyncThunk("song/paginate", async (data) => {
	return await axios.get(`http://localhost:5000/song/song?page=${data}`);
})

export { getSongs, paginate };
