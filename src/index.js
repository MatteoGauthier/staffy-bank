import ReactDOM from "react-dom"
import "@unocss/reset/tailwind.css"
import React from "react"

import "./assets/Main.css"
import "./assets/fonts.css"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
