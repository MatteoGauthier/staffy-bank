import Transactions from "../components/Dashboard/Transactions"
import useLocalState from "../hooks/useLocalState"
import { defaultTransactions } from "../mock/data"

export default function Dashboard() {
	const [accounts, setAccounts] = useLocalState(defaultAccounts, "accounts")
	const [transactions, setTransactions] = useLocalState(defaultTransactions, "transactions")

	return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Transaction</h2>
			<Transactions transactions={transactions} />
		</main>
	)
}
