import React from "react"

function Transactions({ transactions }) {
	return (
		<div>
			<h3>Transactions</h3>
			<div>
				{transactions.map((transaction) => (
					<div key={transaction.id}>
						<p>{transaction.description}</p>
						<p>{transaction.amount}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Transactions
