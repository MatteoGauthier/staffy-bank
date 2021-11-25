import { randomUUID } from "crypto"

const defaultTransactions = [
	{
		id: "434jRNbqFwIG6aUYBT1_e",
		account: "98b271c4-b68a-47a1-8f2f-467954bd14c4",
		amount: 100,
		type: "credit",
		description: "Salary",
		date: "2021-11-20T09:35:14.668Z",
	},
	{
		id: "YQON9ghoOld0hlUw9-ixh",
		account: "98b271c4-b68a-47a1-8f2f-467954bd14c4",
		amount: -100,
		type: "debit",
		description: "Food",
		date: "2021-11-25T09:35:14.668Z",
	},
]
const defaultAccounts = [
	{
		id: "98b271c4-b68a-47a1-8f2f-467954bd14c4",
		name: "Epargne",
		type: "savings",
		balance: 400,
	},
	{
		id: "2c21691c-f914-46fd-979c-0bf44b986d81",
		name: "Courant",
		type: "main",
		balance: 1000,
	},
]

export { defaultTransactions, defaultAccounts }
