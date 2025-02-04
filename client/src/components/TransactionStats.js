import React, { useState, useEffect } from 'react';
import { getStatistics } from '../api';

const TransactionStats = ({ month }) => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await getStatistics(month);
      setStatistics(response.data);
    };
    fetchStatistics();
  }, [month]);

  return (
    <div>
      {statistics ? (
        <div>
          <h3>Statistics for {month}</h3>
          <p>Total Sale: {statistics.totalSales}</p>
          <p>Total Sold Items: {statistics.soldItems}</p>
          <p>Total Not Sold Items: {statistics.notSoldItems}</p>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
    </div>
  );
};

export default TransactionStats;
