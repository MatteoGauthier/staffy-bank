import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import Dashboard from "./routes/dashboard"
import "./index.css"
import App from "./routes/App"
import "./assets/Main.css"
import "./assets/fonts.css"
import "@unocss/reset/tailwind.css"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)
