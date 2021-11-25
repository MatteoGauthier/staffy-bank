import { useState } from "react"

import CardBlue from "../components/Landing/CardBlue"
import CardRed from "../components/Landing/CardRed"
import CardGreen from "../components/Landing/CardGreen"
import Hero from "../components/Hero"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<Hero />
			<div className="parentCard">
				<CardBlue />
				<CardRed />
				<CardGreen />
			</div>
		</div>
	)
}

export default App
