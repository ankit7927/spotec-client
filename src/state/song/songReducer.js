import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axios";

const paginate = createAsyncThunk("song/paginate", async (data) => {
	return await Axios.get(`track?page=${data}`);
});

export { paginate };
