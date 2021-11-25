import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import Dashboard from "./routes/dashboard"
import "./index.css"
import App from "./routes/App"
import "./assets/Main.css"
import "./assets/fonts.css"
import "@unocss/reset/tailwind.css"
import AccountCreation from "./routes/account-creation"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="inscription" element={<AccountCreation />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)
