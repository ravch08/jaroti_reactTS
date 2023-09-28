import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import store from "./app/store.js";

import "./styles/main.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
