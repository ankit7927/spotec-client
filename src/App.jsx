import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./screens/HomePage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
	]);

	return (
		<div className="container">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
