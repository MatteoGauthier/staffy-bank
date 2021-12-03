import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CardBlue from "./components/Landing/CardBlue"
import useLocalState from "./hooks/useLocalState"
import { defaultAccounts, defaultTransactions } from "./mock/data"
import AccountCreation from "./routes/account-creation"
import Dashboard from "./routes/dashboard"
import Home from "./routes/home"
import Context from "./utils/context"

function App() {
	const [card, setCard] = useLocalState("green", "card")
	const [name, setName] = useLocalState("Clément", "name")
	const [surname, setSurname] = useLocalState("Borget", "surname")
	const [accounts, setAccounts] = useLocalState(defaultAccounts, "accounts")
	const [transactions, setTransactions] = useLocalState(defaultTransactions, "transactions")

	const context = {
		name: name,
		setName: setName,
		card: card,
		setCard: setCard,
		accounts: accounts,
		setAccounts: setAccounts,
		surname: surname,
		setSurname: setSurname,
		mainAccount: accounts.find((account) => {
			console.log(account)
			return account.type == "main"
		}),
		setMainAccount: (eAcc) => {
			setAccounts(
				accounts.map((acc) => {
					if (acc.type === "main") {
						return eAcc
					}
					return acc
				})
			)
		},
		savingsAccount: accounts.find((account) => account.type === "savings"),
		setSavingsAccount: (eAcc) => {
			setAccounts(
				accounts.map((acc) => {
					if (acc.type === "savings") {
						return eAcc
					}
					return acc
				})
			)
		},
		transactions: transactions,
		setTransactions: setTransactions,
	}

	return (
		<Context.Provider value={context}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="inscription" element={<AccountCreation />} />
					<Route path="dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</Context.Provider>
	)
}

export default App
