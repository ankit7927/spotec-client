import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axios";

const homeFeed = createAsyncThunk("song/homeFeed", async () => {
	return await Axios.get(`home-feed`);
});

const search = createAsyncThunk("song/search", async (data) => {
	return await Axios.get(`search?query=${data}`);
});

export { homeFeed, search };
