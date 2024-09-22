import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
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
