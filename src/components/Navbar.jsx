import React from "react";
import { useDispatch } from "react-redux";
import { homeFeed, search } from "../state/song/songReducer";
import { onQueryChange } from "../state/song/songSlice";
search;

const Navbar = () => {
	const dispatch = useDispatch();

	const onSearchQueryChange = (e) => {
		const query = e.target.value;
		dispatch(onQueryChange(query));
		if (query) dispatch(search(query));
		else dispatch(homeFeed());
	};

	return (
		<nav className="navbar navbar-light rounded rounded-6 px-2">
			<div className="container-fluid">
				<a className="navbar-brand fs-4 fw-bold">SPOTEC</a>
				<div className="d-flex w-auto">
					<input
						onChange={onSearchQueryChange}
						type="search"
						className="form-control rounded"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="search-addon"
					/>
					<button
						type="button"
						className="btn btn-secondary btn-floating ms-2"
					>
						<i className="fas fa-home"></i>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
