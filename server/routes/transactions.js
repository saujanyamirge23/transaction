// server/routes/transactions.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { month } = req.query;

  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;

    // Filter transactions by the selected month
    const filteredData = transactions.filter(transaction => {
      const transactionMonth = new Date(transaction.dateOfSale).toLocaleString('default', { month: 'long' });
      return transactionMonth.toLowerCase() === month.toLowerCase();
    });

    res.json(filteredData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

module.exports = router;
