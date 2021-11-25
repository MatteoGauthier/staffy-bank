import React from "react"
import "./Transactions.css"
import { defaultAccounts } from "../../mock/data"

function getAccountName(accountId) {
	const account = defaultAccounts.find((account) => account.id === accountId)
	return account ? account.name : ""
}

function Transactions({ transactions }) {
	return (
		<div className="transactions-card">
			<h3>Transactions</h3>
			<table className="transactions-table">
				<thead>
					<tr>
						<th>id</th>
						<th>account</th>
						<th>description</th>
						<th>amount</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td>{transaction.id}</td>
							<td>{getAccountName(transaction.account)}</td>
							<td>{transaction.description}</td>
							<td className={`${transaction.type == "credit" ? "amount-green" : "amount-red"} amount`}>
								{transaction.amount}$
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Transactions
