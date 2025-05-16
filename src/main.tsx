import React from "react";
import { CreateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.scss"
import App from "./App.tsx";

CreateRoot(document.getElementById("root")!).render(
    <React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)