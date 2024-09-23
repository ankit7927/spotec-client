import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeFeed, search } from "../state/song/songReducer";
import { onQueryChange } from "../state/song/songSlice";
import { logout } from "../state/user/userSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.user.loggedIn);

	const onSearchQueryChange = (e) => {
		const query = e.target.value;
		dispatch(onQueryChange(query));
		if (query) dispatch(search(query));
		else dispatch(homeFeed());
	};

	const onLogoutClick = () => {
		dispatch(logout());
	};

	return (
		<nav className="navbar navbar-light rounded rounded-6 px-2">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<a className="navbar-brand fs-4 fw-bold">SPOTEC</a>
				<div className=" w-auto">
					<input
						onChange={onSearchQueryChange}
						type="search"
						className="form-control rounded"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="search-addon"
					/>
				</div>
				{loggedIn ? (
					<button
						onClick={onLogoutClick}
						type="button"
						className="btn btn-secondary btn-floating ms-2"
					>
						<i class="fas fa-arrow-right-from-bracket"></i>
					</button>
				) : (
					<></>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
