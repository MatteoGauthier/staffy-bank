import useLocalState from "../hooks/useLocalState"
import { defaultAccounts, defaultTransactions } from "../mock/data"
import BalanceCourant from "../components/BalanceCourant.jsx"
export default function Dashboard() {
	const [accounts, setAccounts] = useLocalState(defaultAccounts, "accounts")
	const [transactions, setTransactions] = useLocalState(defaultTransactions, "transactions")

	return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Expenses</h2>
			<BalanceCourant />
		</main>
	)
} 
