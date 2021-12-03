import { useContext, useState } from "react"
import PDP from "../assets/image/PDP.png"
import Context from "../utils/context"
import Modal from "@nextui-org/react/modal"
import CardBlueImg from "../assets/image/Bluecard.png"
import CardGreenImg from "../assets/image/GreenCard.png"
import CardRedImg from "../assets/image/RedCard.png"

function Profil() {
	const { name, setName, surname, setSurname, card, setCard } = useContext(Context)
	const [visible, setVisible] = useState(false)
	const openModal = () => setVisible(true)
	const closeModal = () => {
		setVisible(false)
		console.log("closed")
	}

	const submitChange = (event) => {
		event.preventDefault()
		const { name, surname } = event.target.elements
		closeModal()
		console.log(name, surname)

		setName(name.value)
		setSurname(surname.value)
	}

	const ColorCard = () => {
		let tempImg = CardGreenImg
		if (card === "blue") {
			tempImg = CardBlueImg
		}
		if (card === "red") {
			tempImg = CardRedImg
		}
		if (card === "green") {
			tempImg = CardGreenImg
		}
		return <img style={{ margin: "0 auto" }} src={tempImg} alt="card" />
	}

	return (
		<div>
			<div className="banner"></div>
			<div className="container">
				<img src={PDP} className="pdp" />
				<div className="containerButton">
					<div className="NameSurname">
						<p>{name}</p>
						<p>{surname}</p>
					</div>
					<button className="buttonModal" onClick={openModal}>
						Modifier
					</button>
				</div>
			</div>
			{ColorCard()}
			<Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeModal}>
				<form onSubmit={submitChange}>
					<Modal.Header>
						<h4>hello</h4>
					</Modal.Header>
					<Modal.Body>
						<input className="inputName" type="text" name="name" defaultValue={name} />
						<input className="inputName" type="text" name="surname" defaultValue={surname} />
					</Modal.Body>
					<Modal.Footer>
						<button type="submit">Valider</button>
						<button
							onClick={(e) => {
								e.preventDefault()
								closeModal()
							}}
						>
							Fermer
						</button>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	)
}
export default Profil
