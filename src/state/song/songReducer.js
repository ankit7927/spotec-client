import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axios";

const paginate = createAsyncThunk("song/paginate", async (data) => {
	return await Axios.get(`track?page=${data}`);
});

const search = createAsyncThunk("song/search", async (data) => {
	return await Axios.get(`search?query=${data.query}&page=${data.page}`);
});

export { paginate, search };
