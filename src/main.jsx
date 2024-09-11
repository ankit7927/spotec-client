import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={<h1>loading</h1>} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>,
);
