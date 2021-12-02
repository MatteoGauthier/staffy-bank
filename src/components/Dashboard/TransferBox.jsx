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

	const [visible, setVisible] = React.useState(false)
	const openModal = () => setVisible(true)
	const closeModal = () => {
		setVisible(false)
		console.log("closed")
	}

	const handleChangeSender = (event) => {
		setSender(event.target.value)
	}
	const handleChangeReceiver = (event) => {
		setReceiver(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const { amount, description } = event.target.elements

		const transferTransactions = transactions
		const transfer = accounts.map((account) => {
			console.log("account log from map accounts", account)

			if (account.id === sender) {
				console.log("Débiter")
				// Débiter le compte du sender
				transferTransactions.push({
					id: nanoid(),
					account: account.id,
					amount: Number(amount.value),
					type: "credit",
					description: description.value,
					date: new Date(),
				})

				return {
					...account,
					balance: Number(account.balance - parseInt(amount.value)),
				}
			} else if (account.id === receiver) {
				console.log("Créditer")
				// Créditer le compte du receiver
				transferTransactions.push({
					id: nanoid(),
					account: account.id,
					amount: -Number(amount.value),
					type: "debit",
					description: description.value,
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
		setTransactions(transferTransactions)
		setAccounts(transfer)
		closeModal()
	}

	return (
		<div>
			<button className="buttonModalTransfer" onClick={openModal}>
				Effectuer un virement
			</button>
			<Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeModal}>
				<form onSubmit={handleSubmit}>
					<Modal.Header>
						<h4>Faire un virement</h4>
					</Modal.Header>
					<Modal.Body>
						<p className="CompteName">Compte à débiter</p>
						<select className="select" name="sender" onChange={handleChangeSender} defaultValue={sender}>
							<option disabled value="">
								Choisissez le compte à débiter
							</option>
							{accounts.map((elm) => {
								return (
									<option key={elm.id} value={elm.id}>
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
							defaultValue={receiver}
						>
							<option disabled value="">
								Choisissez le compte à créditer
							</option>
							{accounts.map((elm) => {
								return (
									<option hidden={sender == elm.id} key={elm.id} value={elm.id}>
										{elm.name}
									</option>
								)
							})}
						</select>
						<div className="transferNumber">
							<label className="CompteName" htmlFor="amount">
								Montant
							</label>
							<input className="select" id="amount" type="number" name="amount" placeholder="montant" />
						</div>
						<div className="transferNumber">
							<label className="CompteName" htmlFor="description">
								Description
							</label>
							<input
								className="select"
								id="description"
								type="text"
								name="description"
								placeholder="Virement pour mamie, merci mamie"
							/>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<button className="buttonTransfer" type="submit">
							Envoyer
						</button>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	)
}

export default TransferBox
