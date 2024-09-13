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
		<div className="container">
			<div className="py-4">
				<Navbar />
			</div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
