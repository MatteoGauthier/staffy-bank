import Transactions from "../components/Dashboard/Transactions"
import TransferBox from "../components/Dashboard/TransferBox"
import useLocalState from "../hooks/useLocalState"
import { defaultAccounts, defaultTransactions } from "../mock/data"
import BalanceCourant from "../components/BalanceCourant.jsx"
import Profil from "../components/Profil.jsx"
export default function Dashboard() {
	const [accounts, setAccounts] = useLocalState(defaultAccounts, "accounts")
	const [transactions, setTransactions] = useLocalState(defaultTransactions, "transactions")

	// https://codesandbox.io/s/myrfc
	// https://ant.design/components/modal/	

	return (
		<main style={{ padding: "1rem 0" }}>
			<Profil />
			<BalanceCourant />
			<h2>Transaction</h2>
			<Transactions transactions={transactions} />
      <TransferBox/>
		</main>
	)
} 
