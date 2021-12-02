import React, { useContext } from "react"
import Context from "../../utils/context"
import { nanoid } from "nanoid"
import Modal from "@nextui-org/react/modal"

const defaultAccounts = [
	{
		name: "Courant",
		value: "courant",
		type: "main",
	},
	{
		name: "epargne",
		value: "epargne",
		type: "savings",
	},
	{
		name: "Cryptomonnaie",
		value: "crypto",
		type: "savings",
	},
]

function TransferBox() {
	const [sender, setSender] = React.useState("")
	const [receiver, setReceiver] = React.useState("")
	const { accounts, setAccounts, mainAccount, savingsAccount, setTransactions, transactions } = useContext(Context)

	const handleChangeSender = (event) => {
		setSender(event.target.value)
	}
	const handleChangeReceiver = (event) => {
		setReceiver(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const { amount, sender, receiver } = event.target.elements

		if (amount.value === "") {
			return alert("Veuillez entrer un montant")
		}
		if (sender.value === "") {
			return alert("Veuillez entrer un sender")
		}
		if (receiver.value === "") {
			return alert("Veuillez entrer un receiver")
		}

		const transferTransactions = transactions
		const transfer = accounts.map((account) => {
			if (account.id === sender.value) {
				// Débiter le compte du sender
				transferTransactions.push({
					id: nanoid(),
					account: account.id,
					amount: Number(amount.value),
					type: "credit",
					description: "edit that",
					date: new Date(),
				})

				return {
					...account,
					balance: Number(account.balance - parseInt(amount.value)),
				}
			} else if (account.id === receiver.value) {
				// Créditer le compte du receiver
				transactions.push({
					id: nanoid(),
					account: account.id,
					amount: -Number(amount.value),
					type: "debit",
					description: "edit that",
					date: new Date(),
				})
				return {
					...account,
					balance: Number(account.balance + parseInt(amount.value)),
				}
			} else {
				return account
			}
		})

		setAccounts(transfer)
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
		const { sender, receiver } = event.target.elements
		console.log(name, surname)

		setSender(sender.value)
		setReceiver(receiver.value)
	}
	return (
		<div>
			{/* <div className="transfer-box">
			<form onSubmit={handleSubmit}>
				<div className="principalContainer">
					<div>
						<p className="CompteName">Compte à débiter</p>
						<select className="select" name="sender" onChange={handleChangeSender} value={sender}>
							{accounts.map((elm) => {
								return (
									<option key={elm.name} value={elm.id}>
										{elm.name}
									</option>
								)
							})}
						</select>
					</div>
					<div>
						<p className="CompteName">Compte à créditer</p>
						<select
							className="select"
							name="receiver"
							onChange={handleChangeReceiver}
							disabled={sender == ""}
							value={receiver}
						>
							{accounts.map((elm) => {
								return (
									<option disabled={sender == elm.id} key={elm.name} value={elm.id}>
										{elm.name}
									</option>
								)
							})}
						</select>
					</div>
					<div className="transferNumber">
						<input className="money2" type="text" name="amount" placeholder="montant" />
						
					</div>
				</div>
			</form>
		</div> */}
<button className="buttonModalTransfer"onClick={openModal}>Effectuer un virement</button>
			<Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeModal}>
				<form onSubmit={submitChange}>
					<Modal.Header>
						<h4>Faire un virement</h4>
					</Modal.Header>
					<Modal.Body>
						<p className="CompteName">Compte à débiter</p>
						<select className="select" name="sender" onChange={handleChangeSender} value={sender}>
							{accounts.map((elm) => {
								return (
									<option key={elm.name} value={elm.id}>
										{elm.name}
									</option>
								)
							})}
						</select>
						<p className="CompteName">Compte à créditer</p>
						<select
							className="select"
							name="receiver"
							onChange={handleChangeReceiver}
							disabled={sender == ""}
							value={receiver}
						>
							{accounts.map((elm) => {
								return (
									<option disabled={sender == elm.id} key={elm.name} value={elm.id}>
										{elm.name}
									</option>
								)
							})}
						</select>
						<div className="transferNumber">
							<input className="money2" type="text" name="amount" placeholder="montant" />
						</div>
					</Modal.Body>
					<Modal.Footer>
						<button className="buttonTransfer" type="submit" onClick={() => {}}>
							Envoyer
						</button>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	)
}

export default TransferBox
