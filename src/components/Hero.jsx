
import PetitHomme from "../assets/image/PetitHomme.svg"
import ImageHero from "../assets/image/ImageHero.png"
import { Link } from 'react-router-dom'

function Hero() {
	return (
		<div>
			<img className="Homme" src={PetitHomme} />
			<div className="conponent">
			<Link to={"/dashboard"} className="compte">Accéder à mon compte</Link>
				<h1 className="Titre"> STAFFY BANK </h1>
				<h3 className="subtitle">
					“Lorem ipsum dolor sit amet”
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
