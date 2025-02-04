// client/src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import TransactionTable from './components/TransactionTable'; // Import your table component

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState("March");
  
  useEffect(() => {
    // Fetch transactions from backend API
    fetch(`/api/transactions?month=${month}`)
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, [month]);

  return (
    <div className="container">
      <h1>Transaction Dashboard</h1>
      <div className="month-selector">
        <label htmlFor="month">Select Month: </label>
        <select id="month" onChange={e => setMonth(e.target.value)} value={month}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>

      {/* Transaction Table */}
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default App;
