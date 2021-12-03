import React, { useContext } from "react"
import Modal from "@nextui-org/react/modal"

import Context from "../utils/context"

export default function BalanceCourant() {
	const [newValue, setNewValue] = React.useState(0)
	const { accounts, setAccounts, mainAccount, setMainAccount, savingsAccount } = useContext(Context)

	const Addmoney = () => {
		setMainAccount({ ...mainAccount, balance: mainAccount.balance + newValue })
	}
	const Substractmoney = () => {
		setMainAccount({ ...mainAccount, balance: mainAccount.balance - newValue })
	}
	const handleChange = (event) => {
		setNewValue(Number(event.target.value))
	}
	const [visible, setVisible] = React.useState(false)
	const openModal = () => setVisible(true)
	const closeModal = () => {
		setVisible(false)
		console.log("closed")
	}
	const submitChange = (event) => {
		event.preventDefault()
		closeModal()
		const { mainAccount } = event.target.elements
	

		mainAccounts(mainAccount.value)

	}
	// console.log(accounts)
	// console.log(mainAccount);
	return (
		<div className="courant">
			<div className="">
				<div className="illustration">
					<p className="name">Compte courant</p>
					<p className="number">{mainAccount && mainAccount.balance.toFixed(2) + "€"}</p>
			<button className="buttonModal"onClick={openModal}>Modifier</button>
				</div>
			</div>


			<Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeModal}>
				<form onSubmit={submitChange}>
					<Modal.Header>
						<h4>Modifier mon solde</h4>
					</Modal.Header>
					<Modal.Body>
					<input className="money" type="number" onChange={handleChange}></input>
					</Modal.Body>
					<Modal.Footer>
					<button className="card-button-add" onClick={Addmoney}>
						ajouter
					</button>
					<button className="card-button-supp" onClick={Substractmoney}>
						supp
					</button>
					</Modal.Footer>
				</form>
			</Modal>
			
		</div>
	)
}
