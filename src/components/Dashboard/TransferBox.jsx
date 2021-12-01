import React, { useContext } from "react"
import Context from "../../utils/context"

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
	const { accounts, setAccounts, mainAccount, savingsAccount } = useContext(Context)

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

		const transfer = accounts.map((account) => {
			if (account.id === sender.value) {
				// Débiter le compte du sender
				return {
					...account,
					balance: Number(account.balance - parseInt(amount.value)),
				}
			} else if (account.id === receiver.value) {
				// Créditer le compte du receiver
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

	return (
		<div className="transfer-box">
			<form onSubmit={handleSubmit}>
				<select name="sender" onChange={handleChangeSender} value={sender}>
					{accounts.map((elm) => {
						return (
							<option key={elm.name} value={elm.id}>
								{elm.name}
							</option>
						)
					})}
				</select>
				<select name="receiver" onChange={handleChangeReceiver} disabled={sender == ""} value={receiver}>
					{accounts.map((elm) => {
						return (
							<option disabled={sender == elm.id} key={elm.name} value={elm.id}>
								{elm.name}
							</option>
						)
					})}
				</select>

				<input type="text" name="amount" placeholder="montant" />
				<button type="submit">Envoyer</button>
			</form>
		</div>
	)
}

export default TransferBox
