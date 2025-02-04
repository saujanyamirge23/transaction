import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionStats from './components/TransactionStats';
import BarChart from './components/BarChart';

const App = () => {
  const [month, setMonth] = useState('March');
  const [search, setSearch] = useState('');

  return (
    <div>
      <h1>Transaction Dashboard</h1>

      <div>
        <label>Select Month: </label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <TransactionStats month={month} />
      <TransactionTable month={month} search={search} setSearch={setSearch} />
      <BarChart month={month} />
    </div>
  );
};

export default App;
