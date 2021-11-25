import React from "react"
import Coffre from "../assets/image/coffre.png"
export default function BalanceCourant() {
	const [newValue, setNewValue] = React.useState(0)
	const [money, setMoney] = React.useState(0)
	const Addmoney = () => {
		setMoney(money + newValue)
	}
	const Substractmoney = () => {
		setMoney(money - newValue)
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
				<p className="number">{money.toFixed(2) + "€"}</p>
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
