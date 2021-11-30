import Transactions from "../components/Dashboard/Transactions"
import TransferBox from "../components/Dashboard/TransferBox"
import useLocalState from "../hooks/useLocalState"
import { defaultAccounts, defaultTransactions } from "../mock/data"
import BalanceCourant from "../components/BalanceCourant.jsx"
import BalanceEpargne from "../components/BalanceEpargne.jsx"

import Profil from "../components/Profil.jsx"
export default function Dashboard() {

	// https://codesandbox.io/s/myrfc
	// https://ant.design/components/modal/

	return (
		<main style={{ padding: "1rem 0" }}>
			<Profil />
			<BalanceCourant />
			<BalanceEpargne />
			<h2>Transaction</h2>
			<Transactions  />
			<TransferBox />
		</main>
	)
}
