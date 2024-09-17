import React from "react";
import { useDispatch } from "react-redux";
import { paginate, search } from "../state/song/songReducer";
import { onQueryChange } from "../state/song/songSlice";
search;

const Navbar = () => {
	const dispatch = useDispatch();

	const onSearchQueryChange = (e) => {
		const query = e.target.value;
		dispatch(onQueryChange(query))
		if (query) dispatch(search({ query: query, page: 0 }));
		else dispatch(paginate(0));
	};

	return (
		<nav className="navbar navbar-light rounded rounded-6 px-2">
			<div className="container">
				<a className="navbar-brand fs-4 fw-bold">SPOTEC</a>
				<div className="d-flex input-group w-auto">
					<input
						onChange={onSearchQueryChange}
						type="search"
						className="form-control rounded"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="search-addon"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
