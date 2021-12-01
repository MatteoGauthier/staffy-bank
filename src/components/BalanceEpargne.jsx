import React, { useContext } from "react"
import Coffre from "../assets/image/coffre.png"
import Context from "../utils/context"

export default function BalanceEpargne() {
	const { savingsAccount } = useContext(Context)

	return (
		<div className="savingsBlock">
			<p className = "name ">Compte épargne</p>
			<p className="number">{savingsAccount && savingsAccount.balance.toFixed(2) + "€"}</p>
		</div>
	)
}
