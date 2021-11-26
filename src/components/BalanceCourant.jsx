import React, { useContext } from "react"
import Coffre from "../assets/image/coffre.png"
import Context from "../utils/context"

export default function BalanceCourant() {
	const [newValue, setNewValue] = React.useState(0)
	const { accounts, setAccounts, mainAccount, setMainAccount } = useContext(Context)

	const Addmoney = () => {
		setMainAccount({ ...mainAccount, balance: mainAccount.balance + newValue })
	}
	const Substractmoney = () => {
		setMainAccount({ ...mainAccount, balance: mainAccount.balance - newValue })
	}
	const handleChange = (event) => {
		setNewValue(Number(event.target.value))
	}
	return (
		<div className="courant">
			<div className="NumberCoffre">
				<div className="illustration">
					<p className="name">Compte courant</p>
					<img className="coffre" src={Coffre} />
				</div>
				<p className="number">{accounts.find((e) => e.type == "main").balance.toFixed(2) + "€"}</p>
			</div>
			<div>
				<div className="indication">
					<p className="name">Modifier mon solde</p>
					<input className="money" type="number" onChange={handleChange}></input>
				</div>
				<div className="buttonAddSupp">
					<button className="card-button-add" onClick={Addmoney}>
						ajouter
					</button>
					<button className="card-button-supp" onClick={Substractmoney}>
						supp
					</button>
				</div>
			</div>
		</div>
	)
}
