import Transactions from "../components/Dashboard/Transactions"
import TransferBox from "../components/Dashboard/TransferBox"
import useLocalState from "../hooks/useLocalState"
import { defaultAccounts, defaultTransactions } from "../mock/data"
import BalanceCourant from "../components/BalanceCourant.jsx"
import { useContext } from "react"
import Context from "../utils/context"
export default function Dashboard() {

	// https://codesandbox.io/s/myrfc
	// https://ant.design/components/modal/

	return (
		<main style={{ padding: "1rem 0" }}>
			<BalanceCourant />
			<h2>Transaction</h2>
			<Transactions  />
			<TransferBox />
		</main>
	)
}
