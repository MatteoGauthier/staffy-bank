import React from "react"
import "../assets/AccountCreation.css"

function AccountCreation() {
	return (
		<div className="account-creation-app">
			<div className="account-creation-wrapper">
				<h1>Créer votre compte STAFFY BANK</h1>
				<p>
					A travers une suite d'étape vous allez créer votre compte STAFFY BANK en remplissant des informations
					personnelles et bancaires.
				</p>

				<div className="creation-input-wrapper">
					<label htmlFor="first_name">Votre prénom</label>
					<input type="text" name="first_name" />
				</div>
				<div className="creation-input-wrapper">
					<label htmlFor="surname">Votre nom de famille</label>
					<input type="text" name="surname" />
				</div>
				<div className="creation-input-wrapper">
					<label htmlFor="phone">Votre numéro de téléphone</label>
					<input type="tel" name="phone" />
				</div>
				<div className="creation-input-wrapper">
					<label htmlFor="postal">Votre code postale</label>
					<input type="text" name="postal" />
				</div>
				<button type="submit">Créer mon compte</button>
			</div>
		</div>
	)
}

export default AccountCreation
