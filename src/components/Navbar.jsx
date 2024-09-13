import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light rounded rounded-6 px-2">
			<div className="container">
				<a className="navbar-brand fs-4 fw-bold">Spotec</a>
				<form className="d-flex input-group w-auto">
					<input
						type="search"
						className="form-control rounded"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="search-addon"
					/>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
