import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import useLocalState from "./hooks/useLocalState"
import { defaultAccounts } from "./mock/data"
import AccountCreation from "./routes/account-creation"
import Dashboard from "./routes/dashboard"
import Home from "./routes/home"
import Context from "./utils/context"

function App() {
	const [name, setName] = useState("Hello")
	const [accounts, setAccounts] = useLocalState(defaultAccounts)

	const context = {
		name: name,
		setName: setName,
		accounts: accounts,
		setAccounts: setAccounts,
		mainAccount: accounts.find((account) => account.type === "main"),
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
