import React from "react"

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

	const handleChangeSender = (event) => {
		setSender(event.target.value)
	}
	const handleChangeReceiver = (event) => {
		setReceiver(event.target.value)
	}

	return (
		<div className="transfer-box">
			<form>
				<select onChange={handleChangeSender} value={sender}>
					{defaultAccounts.map((elm) => {
						return (
							<option key={elm.name} value={elm.value}>
								{elm.name}
							</option>
						)
					})}
				</select>
				<select onChange={handleChangeReceiver} disabled={sender == ""} value={receiver}>
					{defaultAccounts.map((elm) => {
						return (
							<option hidden={sender == elm.value} key={elm.name} value={elm.value}>
								{elm.name}
							</option>
						)
					})}
				</select>
			</form>
		</div>
	)
}

export default TransferBox
