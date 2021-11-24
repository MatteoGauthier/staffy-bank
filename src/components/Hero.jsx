import React from "react"
import PetitHomme from "../assets/image/PetitHomme.svg"
import ImageHero from "../assets/image/ImageHero.png"

function Hero() {
	return (
		<div>
			<img className="Homme" src={PetitHomme} />
			<div className="conponent">
				<h1 className="Titre"> STAFFY BANK </h1>
				<h3 className="subtitle">
					“Loin des yeux, <br /> près de vous”
				</h3>
				<p className="paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas donec sit tellus amet ut et nullam. Aliquam
					eget nibh bibendum sed massa.{" "}
				</p>
			</div>
			<img className="SizeImage" src={ImageHero} />
		</div>
	)
}

export default Hero
