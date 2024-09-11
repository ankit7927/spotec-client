import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getSongs = createAsyncThunk("song/allSongs", async (data) => {
	return await axios.get("http://localhost:5000/song/song");
});

export { getSongs };
