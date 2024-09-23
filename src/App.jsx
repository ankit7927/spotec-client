import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";
import Register from "./screens/Register";
import Login from "./screens/Login";
import HomeFeed from "./screens/HomeFeed";
import PlayListPage from "./screens/PlayListPage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			children: [
				{
					path: "",
					element: <HomeFeed />,
				},
				{
					path: "/list/:listId",
					element: <PlayListPage />,
				},
			],
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/login",
			element: <Login />,
		},
	]);

	return (
		<div className="container-fluid">
			<div className="py-3">
				<Navbar />
			</div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
