import { useContext, useState } from "react"

import CardBlue from "../components/Landing/CardBlue"
import CardRed from "../components/Landing/CardRed"
import CardGreen from "../components/Landing/CardGreen"
import Hero from "../components/Hero"
import Context from "../utils/context"

function Home() {
	const { name, setName } = useContext(Context)
	console.log(name)
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

export default Home
