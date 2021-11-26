import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

import "./assets/Main.css"
import "./assets/fonts.css"
import "@unocss/reset/tailwind.css"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
