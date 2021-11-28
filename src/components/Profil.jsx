import React, { useContext, useState } from "react"
import PDP from "../assets/image/PDP.png"
import Context from "../utils/context"
import Modal from "@nextui-org/react/modal"

function Profil() {
	const { name, setName, surname, setSurname } = useContext(Context)
	const [visible, setVisible] = React.useState(false)
	const openModal = () => setVisible(true)
	const closeModal = () => {
		setVisible(false)
		console.log("closed")
	}

	const submitChange = (event) => {
		event.preventDefault()
		const { name, surname } = event.target.elements

		console.log(name, surname)

    
	}
	return (
		<div>
			<div className="banner"></div>
			<div className="container">
				<img src={PDP} className="pdp" />
				<div className="NameSurname">
					<p>{name}</p>
					<p>{surname}</p>
				</div>
			</div>
			<button onClick={openModal}>Open Modal</button>
			<Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeModal}>
				<form onSubmit={submitChange}>
					<Modal.Header>
						<h4>hello</h4>
					</Modal.Header>
					<Modal.Body>
						<input type="text" name="name" defaultValue={name} />
						<input type="text" name="surname" defaultValue={surname} />
					</Modal.Body>
					<Modal.Footer>
						<button type="submit">Valider</button>
						<button onClick={closeModal}>Fermer</button>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	)
}
export default Profil
