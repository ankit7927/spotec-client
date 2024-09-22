import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axios";

export const loginUser = createAsyncThunk("user/login", async (data, thunk) => {
	return await Axios.post("user/login", data);
});

export const registerUser = createAsyncThunk(
	"user/register",
	async (data, thunk) => {
		return await Axios.post("user/login", data);
	},
);

export const getUser = createAsyncThunk("user/get", async (data, thunk) => {
	const token = localStorage.getItem("access_token");

	return await Axios.post("user/login", data, {
		headers: {
			Authorization: token || "",
		},
	});
});

export const refreshToken = createAsyncThunk(
	"user/refresh",
	async (data, thunk) => {
		const token = localStorage.getItem("refresh_token");

		return await Axios.post("user/refresh", data, {
			headers: {
				Authorization: token || "",
			},
		});
	},
);
