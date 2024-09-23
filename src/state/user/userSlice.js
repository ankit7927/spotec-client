import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, refreshToken, registerUser } from "./userReduder";

const initialState = {
	status: "idle",
	error: null,
	loggedIn: false,
	id: null,
	name: "",
	email: "",
	lists: [],
	tracks: [],
};

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem("access_token");
			localStorage.removeItem("refresh_token");
			state.loggedIn = false;
			state.id = null;
			state.name = "";
			state.email = "";
			state.lists = [];
			state.tracks = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.error = response.error;
				state.status = "idle";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				const response = action.payload.data;
				localStorage.setItem("access_token", response.access);
				localStorage.setItem("refresh_token", response.refresh);
				state.id = response.id;
				state.loggedIn = true;
			});

		builder
			.addCase(registerUser.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.error = action.payload.error;
				state.status = "idle";
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.status = "idle";
			});

		builder
			.addCase(getUser.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(getUser.rejected, (state, action) => {
				state.error = action.payload.error;
				state.status = "idle";
			})
			.addCase(getUser.fulfilled, (state, action) => {
				const response = action.payload.data;
				state.email = response.email;
				state.name = response.name;
				state.tracks = response.tracks;
				state.lists = response.lists;
				state.status = "idle";
			});

		builder
			.addCase(refreshToken.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(refreshToken.rejected, (state, action) => {
				state.error = action.payload.error;
				state.status = "idle";
			})
			.addCase(refreshToken.fulfilled, (state, action) => {
				const response = action.payload.data;
				localStorage.setItem("access_token", response.access);
				state.status = "idle";
			});
	},
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
