import { useContext } from "react"
import "./Transactions.css"
import { defaultAccounts } from "../../mock/data"
import Context from "../../utils/context"

function getAccountName(accountId) {
	const account = defaultAccounts.find((account) => account.id === accountId)
	return account ? account.name : ""
}

function Transactions() {
	const { transactions, setTransactions } = useContext(Context)

	return (
		<div className="transactions-card">
			<p className="historique">Historique des virements</p>
			<table className="transactions-table">
				<thead>
					<tr>
						<th>account</th>
						<th>description</th>
						<th>amount</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => {
						// console.log(transaction)
						return (
							<tr key={transaction.id}>
								<td>{getAccountName(transaction.account)}</td>
								<td>{transaction.description}</td>
								<td className={`${transaction.type == "credit" ? "amount-green" : "amount-red"} amount`}>
									{transaction.amount}$
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Transactions
