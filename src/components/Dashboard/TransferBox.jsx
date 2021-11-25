import React from 'react'
import useLocalState from '../../hooks/useLocalState'

function TransferBox() {
  const [accounts, setAccounts] = useLocalState(null, "accounts")

  return (
    <div className="transfer-box">
      
    </div>
  )
}

export default TransferBox
