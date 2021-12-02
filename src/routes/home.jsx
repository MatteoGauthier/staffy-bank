import { useContext, useState } from "react"

import CardBlue from "../components/Landing/CardBlue"
import Footer from "../components/Landing/footer"
import CardRed from "../components/Landing/CardRed"
import CardGreen from "../components/Landing/CardGreen"
import Hero from "../components/Hero"
import Context from "../utils/context"
import { useNavigate } from "react-router"

function Home() {
	let navigate = useNavigate()
	const { setCard } = useContext(Context)

	const handleClick = (cardType) => {
		setCard(cardType)
		navigate("/dashboard")
	}

	return (
		<div>
			<Hero />
			<div className="parentCard">
				<CardBlue handleClick={() => handleClick("blue")} />
				<CardRed handleClick={() => handleClick("red")} />
				<CardGreen handleClick={() => handleClick("green")} />
			</div>
			<Footer />
		</div>
	)
}

export default Home
