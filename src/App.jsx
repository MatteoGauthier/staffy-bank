import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AccountCreation from "./routes/account-creation"
import Dashboard from "./routes/dashboard"
import Home from "./routes/home"
import Context from "./utils/context"

function App() {
	const [name, setName] = useState("Hello")
	const [accounts, setAccounts] = useState([])
	const [money, setMoney] = useState(0)

	const context = {
		name: name,
		setName: setName,
		accounts: accounts,
		setAccounts: setAccounts,
		money:money,
		setMoney: setMoney, 
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
