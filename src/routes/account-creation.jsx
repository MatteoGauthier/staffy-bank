import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import "../assets/AccountCreation.css"

const defaultFormData = {
	first_name: "",
	surname: "",
	phone: "",
	postal: "",
	email: "",
	card: "",
}

function AccountCreation() {
	let [searchParams, setSearchParams] = useSearchParams()
	let card = searchParams.get("card")

	const [formData, setFormData] = useState(defaultFormData)
	const [formCardValue, setFormCardValue] = useState("")

	function submitData(event) {
		// TODO create a lib for that
		event.preventDefault()

		let target = event.target
		let formResult = {}

		for (let i = 0; i < target.length; i++) {
			if (target.elements[i].nodeName == "INPUT" || target.elements[i].nodeName == "SELECT") {
				formResult[target.elements[i].getAttribute("name")] = target.elements[i].value
			}
		}
		setFormData(formResult)
	}

	useEffect(() => {
		if (card) {
			setFormCardValue(card)

			console.log(card)
		}
	}, [card])

	return (
		<div className="account-creation-app">
			<form className="account-creation-wrapper" onSubmit={submitData}>
				<h1>Créer votre compte STAFFY BANK</h1>
				<p>
					A travers une suite d'étape vous allez créer votre compte STAFFY BANK en remplissant des informations
					personnelles et bancaires.
				</p>

				<div className="creation-input-wrapper">
					<label htmlFor="first_name">Votre prsénom</label>
					<input type="text" name="first_name" />
				</div>
				<div className="creation-input-wrapper">
					<label htmlFor="surname">Votre nom de famille</label>
					<input type="text" name="surname" />
				</div>
				<div className="creation-input-wrapper">
					<label htmlFor="phone">Votre numéro de téléphone</label>
					<input type="tel" name="phone" autoComplete="phone" />
				</div>
				<div className="creation-input-wrapper">
					<label htmlFor="postal">Votre code postale</label>
					<input type="text" name="postal" />
				</div>
				<div className="creation-input-wrapper">
					<label htmlFor="email">Votre email</label>
					<input type="email" name="email" />
				</div>
				<div className="creation-input-wrapper">
					<label htmlFor="card">Quel carte vous intéresse ? </label>
					<select name="card" value={formCardValue} onChange={() => {}} id="card">
						<option value="red">Red</option>
						<option value="blue">Blue</option>
						<option value="green">Green</option>
					</select>
				</div>
				<button type="submit">Créer mon compte</button>
			</form>
		</div>
	)
}

export default AccountCreation
